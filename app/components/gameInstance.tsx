'use client';

import { Canvas } from '@react-three/fiber'
import { CameraControls, OrbitControls } from '@react-three/drei'

function SpinningBox() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} /> 
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function GameInstance() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SpinningBox/>      
        <CameraControls/>  
      </Canvas>
    </div>
  )
}