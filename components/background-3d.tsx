"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"
import { useFrame } from "@react-three/fiber"

function FloatingObject({
  position,
  geometry,
  color,
}: {
  position: [number, number, number]
  geometry: "box" | "sphere" | "torus" | "octahedron" | "cone"
  color: string
}) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
      {geometry === "sphere" && <sphereGeometry args={[0.6, 16, 16]} />}
      {geometry === "torus" && <torusGeometry args={[0.5, 0.2, 8, 16]} />}
      {geometry === "octahedron" && <octahedronGeometry args={[0.7]} />}
      {geometry === "cone" && <coneGeometry args={[0.6, 1.2, 4]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} performance={{ min: 0.5 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ff96" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00d9ff" />

        <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />

        <FloatingObject position={[-4, 2, -5]} geometry="box" color="#00ff96" />
        <FloatingObject position={[5, -3, -8]} geometry="sphere" color="#ff6600" />
        <FloatingObject position={[2, 4, -12]} geometry="torus" color="#b800ff" />
        <FloatingObject position={[3, 4, -6]} geometry="octahedron" color="#00d9ff" />
        <FloatingObject position={[-5, -2, -7]} geometry="cone" color="#00ff00" />
        <FloatingObject position={[6, 1, -10]} geometry="box" color="#ffff00" />
        <FloatingObject position={[0, 0, -10]} geometry="sphere" color="#4169e1" />
        <FloatingObject position={[-3, 3, -9]} geometry="torus" color="#ff00ff" />
        <FloatingObject position={[4, -4, -11]} geometry="octahedron" color="#00ffff" />
        <FloatingObject position={[-6, 0, -8]} geometry="cone" color="#ff0099" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.1} />
      </Canvas>
    </div>
  )
}
