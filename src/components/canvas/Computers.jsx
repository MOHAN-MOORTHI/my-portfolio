import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

const GlowingBall = ({ isMobile }) => {
    return (
        <group scale={isMobile ? 1.8 : 2.2}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Core Shape */}
                <mesh>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#915EFF"
                        emissive="#7000ff"
                        emissiveIntensity={2}
                        roughness={0.1}
                        metalness={0.8}
                        flatShading
                    />
                </mesh>

                {/* Wireframe Overlay */}
                <mesh scale={1.05}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        wireframe
                        transparent
                        opacity={0.3}
                    />
                </mesh>

                {/* Outer Glow Halo */}
                <mesh scale={[1.4, 1.4, 1.4]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#a05eff"
                        transparent
                        opacity={0.1}
                        roughness={0}
                        depthWrite={false}
                    />
                </mesh>
            </Float>

            {/* Lights */}
            <pointLight intensity={3} distance={10} color="#b15eff" />
            <ambientLight intensity={0.5} />
        </group>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia("(max-width: 500px)").matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        const handleMediaQueryChange = (event) => setIsMobile(event.matches);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={1.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <GlowingBall isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
