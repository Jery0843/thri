"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere, Environment } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";

function StarBackground({ themeColor, size, ...props }: any) {
  const ref = useRef<any>(null);
  // Float32Array length must be a multiple of 3 (x,y,z for each point). 5001 / 3 = 1667.
  const sphere = useMemo(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={themeColor}
          size={size || 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function LightModeBackground() {
  const orbs = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 8,
      ] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      color: ["#e0c3fc", "#8ec5fc", "#f5f7fa", "#f43f5e", "#6d28d9"][Math.floor(Math.random() * 5)]
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#e0c3fc" />
      {orbs.map((orb, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={orb.position} scale={orb.scale}>
            <meshPhysicalMaterial 
              color={orb.color} 
              roughness={0.1} 
              transmission={0.6} 
              thickness={2}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transparent={true} 
              opacity={0.8}
            />
          </Sphere>
        </Float>
      ))}
      <Environment preset="city" />
    </>
  );
}

export default function HeroCanvas() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="canvas-container">
      {/* Restored original camera position [0, 0, 1] for Dark Mode particles */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {theme === "light" ? (
          <LightModeBackground />
        ) : (
          <StarBackground themeColor="#a855f7" size={0.002} />
        )}
      </Canvas>
    </div>
  );
}
