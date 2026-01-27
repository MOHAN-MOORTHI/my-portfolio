import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

import * as THREE from 'three';

const Earth = () => {
    return (
        <group>
            {/* Inner Dark Core */}
            <mesh scale={2.4}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#1d1836" />
            </mesh>

            {/* Wireframe Grid */}
            <mesh scale={2.5}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#915eff"
                    wireframe
                    transparent
                    opacity={0.5}
                />
            </mesh>

            {/* Atmosphere / Glow */}
            <mesh scale={2.65}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#4488ff"
                    transparent
                    opacity={0.1}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
