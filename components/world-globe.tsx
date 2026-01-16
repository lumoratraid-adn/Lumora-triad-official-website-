"use client"

import React, { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, ContactShadows, PerspectiveCamera, OrbitControls, Text, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei"
import * as THREE from "three"

// Tool definitions 
const tools = [
    { name: "VS CODE", symbol: "⌨", color: "#007ACC" },
    { name: "DJANGO", symbol: "D", color: "#092E20" },
    { name: "GODADDY", symbol: "G", color: "#77B921" },
    { name: "GIT", symbol: "GIT", color: "#F05032" },
    { name: "JS", symbol: "JS", color: "#F7DF1E" },
    { name: "CHATGPT", symbol: "AI", color: "#74aa9c" },
    { name: "ANTIGRAVITY", symbol: "AG", color: "#ff5f00" },
    { name: "CLAUDE", symbol: "C", color: "#D97757" },
    { name: "NANOBANANA", symbol: "🍌", color: "#FFE135" },
    { name: "NEXT.JS", symbol: "N", color: "#ffffff" },
    { name: "REACT", symbol: "⚛", color: "#61DAFB" },
    { name: "TYPESCRIPT", symbol: "TS", color: "#3178C6" },
    { name: "NODE.JS", symbol: "JS", color: "#339933" },
    { name: "PYTHON", symbol: "PY", color: "#3776AB" },
    { name: "VERCEL", symbol: "▲", color: "#ffffff" },
]

function ToolLabel({ name, symbol, color, radius, speed, offset, verticalOffset }: { name: string, symbol: string, color: string, radius: number, speed: number, offset: number, verticalOffset: number }) {
    const ref = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime() * speed + offset
            ref.current.position.x = Math.cos(t) * radius
            ref.current.position.z = Math.sin(t) * radius
            ref.current.position.y = verticalOffset + Math.sin(t * 0.5) * 0.5

            // Face the camera
            ref.current.quaternion.copy(state.camera.quaternion)
        }
    })

    return (
        <group ref={ref}>
            {/* Icon Circle */}
            <mesh>
                <circleGeometry args={[0.35, 32]} />
                <meshStandardMaterial color="#ffffff" opacity={0.9} transparent metalness={0.5} roughness={0} />
            </mesh>

            {/* symbol/Icon */}
            <Text
                fontSize={0.2}
                color="#000000"
                anchorX="center"
                anchorY="middle"
                position={[0, 0, 0.01]}
            >
                {symbol}
            </Text>

            {/* Label Text */}
            <Text
                fontSize={0.12}
                color="#000000"
                anchorX="center"
                anchorY="middle"
                position={[0, -0.45, 0]}
                fontWeight="bold"
            >
                {name}
            </Text>

            {/* Connection Light */}
            <mesh position={[0, 0, -0.05]}>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={5} />
            </mesh>
        </group>
    )
}

function TechGlobe() {
    const globeRef = useRef<THREE.Mesh>(null)
    const wireframeRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.002
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y -= 0.001
            wireframeRef.current.rotation.x += 0.0005
        }
    })

    const toolOrbits = useMemo(() => {
        return tools.map((tool, i) => ({
            name: tool.name,
            symbol: tool.symbol,
            color: tool.color,
            radius: 2.5 + Math.random() * 2,
            speed: 0.1 + Math.random() * 0.1,
            offset: (i / tools.length) * Math.PI * 2,
            verticalOffset: (Math.random() - 0.5) * 4
        }))
    }, [])

    return (
        <group>
            {/* The Central Earth Globe - Metallic/Elite Look */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={globeRef} castShadow>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <meshStandardMaterial
                        color="#1a1a1a" // Darker chrome for better visibility on white bg
                        metalness={1}
                        roughness={0.1}
                    />

                    {/* Inner Glow to define edges */}
                    <mesh scale={1.01}>
                        <sphereGeometry args={[1.5, 64, 64]} />
                        <meshStandardMaterial color="#ff5f00" opacity={0.05} transparent />
                    </mesh>
                </mesh>

                {/* Floating Wireframe Orbiting Earth */}
                <mesh ref={wireframeRef} scale={1.1}>
                    <sphereGeometry args={[1.55, 32, 24]} />
                    <meshStandardMaterial color="#ff5f00" opacity={0.2} transparent wireframe />
                </mesh>
            </Float>

            {/* Orbiting Tech Icons */}
            {toolOrbits.map((tool, i) => (
                <ToolLabel key={i} {...tool} />
            ))}

            {/* Base Light for the Earth */}
            <pointLight position={[0, -2, 0]} intensity={3} color="#ff5f00" distance={6} />
            <pointLight position={[0, 2, 0]} intensity={2} color="#ffffff" distance={6} />

            {/* High-Tech Base Platform */}
            <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <circleGeometry args={[4, 64]} />
                <meshStandardMaterial
                    color="#ffffff"
                    opacity={0.1}
                    transparent
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Decorative Outer Ring for Platform */}
            <mesh position={[0, -2.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[3.8, 4, 64]} />
                <meshStandardMaterial color="#ff5f00" opacity={0.3} transparent />
            </mesh>
        </group>
    )
}

export function WorldGlobe() {
    return (
        <div className="w-full h-full min-h-[500px] lg:min-h-[700px] relative">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                <directionalLight position={[-5, 5, 5]} intensity={1} />

                <Suspense fallback={null}>
                    <TechGlobe />
                    <Environment preset="night" /> {/* Using night preset to make chrome pop more on white bg */}
                </Suspense>

                <ContactShadows
                    position={[0, -2.8, 0]}
                    opacity={0.3}
                    scale={10}
                    blur={2.5}
                    far={4}
                />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    )
}
