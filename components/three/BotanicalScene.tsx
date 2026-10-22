"use client";

import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Instance, Instances, Lightformer, MeshTransmissionMaterial, PerformanceMonitor } from "@react-three/drei";
import { pointer } from "./pointer";

// An abstract apothecary drop: a glass droplet with leaves and dried petals drifting around it.
// Decorative only; it is not a product.

function leafGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.bezierCurveTo(0.35, 0.25, 0.4, 0.75, 0, 1.2);
  s.bezierCurveTo(-0.4, 0.75, -0.35, 0.25, 0, 0);
  const g = new THREE.ShapeGeometry(s, 10);
  // A gentle fold along the midrib so the leaf catches light on both halves.
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const y = p.getY(i);
    p.setZ(i, Math.abs(x) * 0.35 - Math.sin((y / 1.2) * Math.PI) * 0.08);
  }
  g.translate(0, -0.6, 0);
  g.computeVertexNormals();
  return g;
}

function dropGeometry() {
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    const a = t * Math.PI;
    // Round at the bottom, drawn to a soft point at the top.
    const r = Math.sin(a) * (1 - 0.55 * Math.pow(t, 2.2));
    const y = -Math.cos(a) * 1.25 + Math.pow(t, 3) * 0.55;
    pts.push(new THREE.Vector2(Math.max(r, 0.0001), y));
  }
  const g = new THREE.LatheGeometry(pts, 64);
  g.computeVertexNormals();
  return g;
}

// Transmission samples what is behind the glass; the canvas is transparent, so give it the arch colour.
const BG = new THREE.Color("#efe3cf");

const LEAF_COLORS = ["#6f7d5c", "#8a9a6b", "#55634a", "#a3ad85", "#b4593a", "#c98a5e"];

type Leaf = { radius: number; height: number; speed: number; phase: number; scale: number; tilt: number; color: string };

function Leaves({ count }: { count: number }) {
  const geo = useMemo(() => leafGeometry(), []);
  const leaves = useMemo<Leaf[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        radius: 1.7 + ((i * 37) % 10) / 11,
        height: -1.6 + ((i * 53) % 17) / 5.2,
        speed: 0.08 + ((i * 13) % 7) / 90,
        phase: (i / count) * Math.PI * 2,
        scale: 0.32 + ((i * 29) % 9) / 22,
        tilt: ((i * 71) % 13) / 4,
        color: LEAF_COLORS[i % LEAF_COLORS.length],
      })),
    [count],
  );
  const refs = useRef<(THREE.Object3D | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    leaves.forEach((l, i) => {
      const o = refs.current[i];
      if (!o) return;
      const a = l.phase + t * l.speed;
      o.position.set(Math.cos(a) * l.radius * 0.85, l.height + Math.sin(t * 0.4 + l.phase) * 0.18, Math.sin(a) * l.radius * 0.7);
      o.rotation.set(l.tilt + Math.sin(t * 0.3 + i) * 0.3, -a + Math.PI / 2, Math.sin(t * 0.25 + l.phase) * 0.6);
    });
  });

  return (
    <Instances geometry={geo} limit={count}>
      <meshStandardMaterial side={THREE.DoubleSide} roughness={0.75} metalness={0} />
      {leaves.map((l, i) => (
        <Instance key={i} ref={(o: THREE.Object3D | null) => void (refs.current[i] = o)} scale={l.scale} color={l.color} />
      ))}
    </Instances>
  );
}

// A herb sprig steeped inside the drop, like an infused oil. Seen through the glass it bends and glows.
function Sprig() {
  const g = useRef<THREE.Group>(null);
  const leaf = useMemo(() => leafGeometry(), []);
  const stem = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.05, -0.95, 0),
      new THREE.Vector3(-0.08, -0.3, 0.05),
      new THREE.Vector3(0.06, 0.3, -0.03),
      new THREE.Vector3(-0.02, 0.85, 0),
    ]);
    return { curve, geo: new THREE.TubeGeometry(curve, 24, 0.022, 6) };
  }, []);
  const leaves = useMemo(
    () =>
      [0.12, 0.26, 0.4, 0.54, 0.68, 0.82, 0.95].map((t, i) => {
        const p = stem.curve.getPoint(t);
        const side = i % 2 ? 1 : -1;
        return { p, side, s: 0.34 - t * 0.14, rot: side * (0.9 - t * 0.3), spin: i * 1.3 };
      }),
    [stem],
  );
  useFrame((_, dt) => {
    if (g.current) g.current.rotation.y += dt * 0.25;
  });
  return (
    <group ref={g} scale={1.05} position={[0, -0.15, 0]}>
      <mesh geometry={stem.geo}>
        <meshStandardMaterial color="#5f6b45" roughness={0.8} />
      </mesh>
      {leaves.map((l, i) => (
        <mesh key={i} geometry={leaf} position={l.p} rotation={[0.2, l.spin, l.rot]} scale={l.s}>
          <meshStandardMaterial color={i % 3 === 2 ? "#8a9a6b" : "#56653f"} side={THREE.DoubleSide} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!g.current) return;
    const k = 1 - Math.exp(-dt * 2.5);
    g.current.rotation.y += (pointer.x * 0.35 - g.current.rotation.y) * k;
    g.current.rotation.x += (pointer.y * 0.12 - g.current.rotation.x) * k;
  });
  return <group ref={g}>{children}</group>;
}

function Drop({ quality }: { quality: "high" | "low" }) {
  const geo = useMemo(() => dropGeometry(), []);
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh geometry={geo} scale={1.15}>
        <MeshTransmissionMaterial
          samples={quality === "high" ? 8 : 3}
          resolution={quality === "high" ? 1024 : 256}
          thickness={0.9}
          roughness={0.04}
          ior={1.42}
          chromaticAberration={0.04}
          anisotropy={0.2}
          distortion={0.15}
          distortionScale={0.4}
          temporalDistortion={0.05}
          color="#ffffff"
          attenuationColor="#e9b75e"
          attenuationDistance={2.6}
          backside
          background={BG}
        />
      </mesh>
    </Float>
  );
}

type Props = { active: boolean; onReady: () => void };

export default function BotanicalScene({ active, onReady }: Props) {
  const [dpr, setDpr] = useState(1.75);
  const [quality, setQuality] = useState<"high" | "low">("high");

  return (
    <Canvas
      dpr={[1, dpr]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 9], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={() => setTimeout(onReady, 300)}
      aria-hidden
    >
      <PerformanceMonitor
        onDecline={() => {
          setDpr(1);
          setQuality("low");
        }}
      />
      <ambientLight intensity={0.5} />
      {/* warm high-desert sun from the upper right */}
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#fff1d6" />
      <directionalLight position={[-5, 1, -3]} intensity={0.8} color="#f2c9a0" />
      <Rig>
        <Drop quality={quality} />
        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
          <Sprig />
        </Float>
        <Leaves count={16} />
      </Rig>
      <Environment resolution={128} frames={1}>
        <Lightformer intensity={2} position={[0, 4, -4]} scale={[10, 3, 1]} color="#fff4e0" />
        <Lightformer intensity={1.4} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[4, 8, 1]} color="#e9c59a" />
        <Lightformer intensity={1.2} position={[5, 1, 2]} rotation-y={-Math.PI / 2} scale={[4, 8, 1]} color="#dfe6cf" />
        <Lightformer intensity={0.6} position={[0, -4, 3]} scale={[8, 1, 1]} color="#b4593a" />
      </Environment>
    </Canvas>
  );
}
