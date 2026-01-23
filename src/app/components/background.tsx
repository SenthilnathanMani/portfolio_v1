"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh, MeshBasicMaterial } from "three";

type StarProps = {
  position: [number, number, number];
  phase: number;
  floatSpeed: number;
};

export function Star({ position, phase, floatSpeed }: StarProps) {
  const mesh = useRef<Mesh>(null!);
  const material = useRef<MeshBasicMaterial>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    mesh.current.position.y =
      position[1] + Math.sin(t * floatSpeed + phase) * 0.4;

    material.current.opacity = 0.4 + Math.sin(t * 2 + phase) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.03, 1, 1]} />
      <meshBasicMaterial
        ref={material}
        color="white"
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

type FloatingTwinklingStarsProps = {
  count?: number;
};

export function FloatingTwinklingStars({
  count = 120,
}: FloatingTwinklingStarsProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        position: [
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
        ] as [number, number, number],
        phase: Math.random() * Math.PI * 2,
        floatSpeed: 0.3 + Math.random() * 0.7,
      })),
    [count]
  );

  return (
    <>
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </>
  );
}

export default function Background() {
  return (
    <>
      {" "}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-pink-950/20"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.1} />
          <FloatingTwinklingStars count={100} />
        </Canvas>
      </div>
    </>
  );
}

export const scrollState = { progress: 0 };
