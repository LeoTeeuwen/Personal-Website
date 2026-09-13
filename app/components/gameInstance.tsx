'use client';

import { Canvas } from '@react-three/fiber'
import { CameraControls, OrbitControls, Plane } from '@react-three/drei'

function SpinningBox() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} /> 
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function FloorPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="lightblue" side={2} /> {/* side={2} renders both sides */}
    </mesh>
  );
}

export default function GameInstance() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloorPlane/>
        <SpinningBox/>      
        <CameraControls/>  
      </Canvas>
    </div>
  )
}