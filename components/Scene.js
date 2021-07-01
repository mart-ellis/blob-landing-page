import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef, useContext } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const AnimatedMaterial = a(MeshDistortMaterial)

export default function Scene({ darkModeToggle, cycleBackground, blobColor }) {
    const sphere = useRef();
    const light = useRef();
    const [mode, setMode] = useState(false);
    const [down, setDown] = useState(false);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        light.current.position.x = state.mouse.x * 20
        light.current.position.y = state.mouse.y * 20
        if (sphere.current) {
            sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 2 : 0, 0.2)
            sphere.current.position.y = THREE.MathUtils.lerp(
                sphere.current.position.y,
                Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
                0.2
            )
        }
    })

    const [{ wobble, coat, color, ambient, env }] = useSpring(
        {
          wobble: down ? 1.2 : hovered ? 1.05 : 1,
          coat: .3,
          ambient: 0.5,
          env: 1,
          color: blobColor,
          config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
        },
        [mode, hovered, down]
    )

    return (
        <>
          <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
            <a.ambientLight intensity={ambient} />
            <a.pointLight ref={light} position-z={-15} intensity={0.001} color="#F8C069" />
          </PerspectiveCamera>
          <Suspense fallback={null}>
            <a.mesh
              ref={sphere}
              scale={wobble}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              onPointerDown={() => setDown(true)}
              onPointerUp={() => {
                setDown(false)
                // Toggle mode between dark and bright
                setMode(!mode)
                cycleBackground();
              }}>
              <sphereBufferGeometry args={[1, 64, 64]} />
              <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
            </a.mesh>
            <Environment preset="lobby" />
            <ContactShadows
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, -1.6, 0]}
              opacity={mode ? 0.5 : 0.4}
              width={15}
              height={15}
              blur={3.5}
              far={1.6}
            />
          </Suspense>
        </>
    )
}
