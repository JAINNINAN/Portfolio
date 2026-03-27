import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// An authentic 6-Axis ABB-style Industrial Robotic Arm
function IndustrialRobot() {
  const baseRef = useRef<THREE.Group>(null);
  const shoulderRef = useRef<THREE.Group>(null);
  const elbowRef = useRef<THREE.Group>(null);
  const forearmRef = useRef<THREE.Group>(null);
  const wristRef = useRef<THREE.Group>(null);
  const toolRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 1.5; // Smooth sweeping time
    
    // Complex, logical sweep mimicking pick and place
    const panning = Math.sin(t * 0.4); // J1 (Base) sweeps left and right
    const reach = Math.sin(t * 0.4 + Math.PI/2); // J2 (Shoulder) extends when pan is at middle, retracts at ends
    const lift = Math.cos(t * 0.8); // J3 (Elbow) coordinates with reach to create straight line path
    
    if (baseRef.current) baseRef.current.rotation.y = panning * 1.5;
    if (shoulderRef.current) shoulderRef.current.rotation.z = reach * 0.6 + 0.3;
    if (elbowRef.current) elbowRef.current.rotation.z = -reach * 0.8 - 1.0 + lift * 0.3;
    if (forearmRef.current) forearmRef.current.rotation.x = Math.sin(t * 1.2) * 1.5;
    if (wristRef.current) wristRef.current.rotation.z = -reach * 0.2 + 0.5; // keep tool relatively level
    if (toolRef.current) toolRef.current.rotation.x = Math.sin(t * 2); // Gripper actuation
  });

  // ABB Signature White and Dark Gray Color Palette (Non-proprietary representation)
  const bodyMaterial = <meshStandardMaterial color="#f8fafc" roughness={0.5} metalness={0.2} />; // Sleek industrial white
  const jointMaterial = <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.8} />; // Dark metal
  const accentMaterial = <meshStandardMaterial color="#0ea5e9" roughness={0.2} metalness={0.9} />; // Blue tool tip
  
  return (
    <group position={[0, -5, 0]} scale={0.8}>
      {/* Base (J1) */}
      <group ref={baseRef}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[2.5, 3, 1, 32]} />
          {bodyMaterial}
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[2, 2.2, 0.4, 32]} />
          {jointMaterial}
        </mesh>
        
        {/* Shoulder Link (J2) */}
        <group position={[0, 1.4, 0]} ref={shoulderRef}>
          {/* J2 Motor Housing */}
          <mesh position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[1.2, 1.2, 3, 32]} />
            {jointMaterial}
          </mesh>
          {/* Lower Arm Body */}
          <mesh position={[0, 2.0, 0.5]} rotation={[0.1, 0, 0]}>
            <boxGeometry args={[1.6, 4.5, 1.4]} />
            {bodyMaterial}
          </mesh>
          <mesh position={[0, 2.0, 1.2]} rotation={[0.1, 0, 0]}>
             <cylinderGeometry args={[0.4, 0.4, 4.0, 16]} />
             {jointMaterial}
          </mesh>
          
          {/* Elbow Link (J3) */}
          <group position={[0, 4.2, 0]} ref={elbowRef}>
            {/* J3 Motor Housing */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[1.0, 1.0, 2.4, 32]} />
              {jointMaterial}
            </mesh>
            {/* Upper Arm Body offset backwards to counterweight */}
            <mesh position={[0, 1.0, -0.6]}>
              <boxGeometry args={[1.2, 3.5, 1.2]} />
              {bodyMaterial}
            </mesh>
            
            {/* Forearm (J4) */}
            <group position={[0, 2.5, -0.6]} ref={forearmRef}>
              <mesh position={[0, 0.8, 0]}>
                <cylinderGeometry args={[0.7, 0.9, 2.0, 32]} />
                {bodyMaterial}
              </mesh>
              
              {/* Wrist (J5) */}
              <group position={[0, 1.8, 0]} ref={wristRef}>
                <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI/2]}>
                  <cylinderGeometry args={[0.6, 0.6, 1.6, 32]} />
                  {jointMaterial}
                </mesh>
                
                {/* Tool Flange (J6) */}
                <group position={[0, 0.5, 0]} ref={toolRef}>
                  <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
                    {jointMaterial}
                  </mesh>
                  {/* Pneumatic Gripper */}
                  <mesh position={[-0.3, 0.6, 0]}>
                    <boxGeometry args={[0.1, 1.2, 0.5]} />
                    {accentMaterial}
                  </mesh>
                  <mesh position={[0.3, 0.6, 0]}>
                    <boxGeometry args={[0.1, 1.2, 0.5]} />
                    {accentMaterial}
                  </mesh>
                  {/* Laser Center */}
                  <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 4]} />
                    <meshBasicMaterial color="#0ea5e9" transparent opacity={0.6} />
                  </mesh>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// LiDAR Point Cloud Mapping Visualization
function LidarCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const pc = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 4000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Creates a circular ground scan effect representing LiDAR environmental mapping
        const radius = Math.random() * 25 + 3;
        const theta = Math.random() * Math.PI * 2;
        positions[i*3] = Math.cos(theta) * radius;
        positions[i*3+1] = (Math.random() - 0.5) * 1.5 - 4.5; // scattered slightly around the ground plane
        positions[i*3+2] = Math.sin(theta) * radius;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
        // Rotates to simulate a 360 Lidar scanner
        pointsRef.current.rotation.y -= 0.005;
    }
  });

  return (
    <points ref={pointsRef} geometry={pc}>
      <pointsMaterial color="#0ea5e9" size={0.06} transparent opacity={0.6} sizeAttenuation={true} />
    </points>
  );
}

function Scene() {
  const containerRef = useRef<THREE.Group>(null);
  const [scrollY, setScrollY] = useState(0);

  // Sync scroll for 3D transition effects without causing React state thrashing in useFrame
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useFrame((state) => {
    if (containerRef.current) {
      // Mouse Parallax Effect
      const targetX = state.pointer.x * 2;
      const targetY = state.pointer.y * 2;
      
      containerRef.current.position.x = THREE.MathUtils.lerp(containerRef.current.position.x, targetX, 0.05);
      containerRef.current.position.y = THREE.MathUtils.lerp(containerRef.current.position.y, targetY, 0.05);

      // Scroll Transition Effects
      // As user scrolls down, the robot moves left, shrinks slightly, and rotates away from texts
      const scrollProgress = Math.min(scrollY / 1000, 1);
      const targetRotY = scrollProgress * Math.PI - 0.2; 
      const targetPosZ = scrollProgress * -15; 
      const targetPosX = targetX + (scrollProgress * -5); 
      
      containerRef.current.rotation.y = THREE.MathUtils.lerp(containerRef.current.rotation.y, targetRotY, 0.05);
      containerRef.current.position.z = THREE.MathUtils.lerp(containerRef.current.position.z, targetPosZ, 0.05);
      containerRef.current.position.x = THREE.MathUtils.lerp(containerRef.current.position.x, targetPosX, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#38bdf8" />
      <pointLight position={[0, 0, 5]} intensity={3} color="#0ea5e9" distance={15} />
      
      <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
      <LidarCloud />

      <group ref={containerRef} position={[2, -1, 0]}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <IndustrialRobot />
        </Float>
      </group>
    </>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-full bg-dark-900 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 16], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, typeof window !== 'undefined' && window.devicePixelRatio > 1 ? 1.5 : 1]}
      >
        <React.Suspense fallback={null}>
          <Scene />
        </React.Suspense>
      </Canvas>
      {/* Overlay gradient to blend bottom edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50 pointer-events-none z-10" />
    </div>
  );
}
