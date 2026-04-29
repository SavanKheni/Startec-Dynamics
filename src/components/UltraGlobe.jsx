"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { geoCentroid } from "d3-geo";
import * as topojson from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

// 🌍 REAL continent-based dots
function GlobePoints() {
  const ref = useRef();

  const positions = useMemo(() => {
    const pts = [];
    const radius = 2;

    const countries = topojson.feature(worldData, worldData.objects.countries);

    countries.features.forEach((feature) => {
      const [lng, lat] = geoCentroid(feature);

      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      // 🔥 create clusters (city glow effect)
      for (let i = 0; i < 80; i++) {
        const offset = 0.06;
        pts.push(
          x + (Math.random() - 0.5) * offset,
          y + (Math.random() - 0.5) * offset,
          z + (Math.random() - 0.5) * offset,
        );
      }
    });

    return new Float32Array(pts);
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        color="#00BFFF"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        transparent
      />
    </Points>
  );
}

// 🔺 Outer broken triangle shell
function NetworkLines() {
  const ref = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.7, 1);
    return new THREE.EdgesGeometry(geo);
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.001;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#00BFFF" transparent opacity={0.25} />
    </lineSegments>
  );
}

// ✨ Rim glow (edge light like reference)
function RimGlow() {
  return (
    <mesh>
      <sphereGeometry args={[2.05, 64, 64]} />
      <meshBasicMaterial
        color="#00BFFF"
        transparent
        opacity={0.08}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// 🌐 Main Scene
export default function UltraGlobe() {
  return (
    <div style={{ height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} />

        {/* Globe */}
        <GlobePoints />
        <NetworkLines />
        <RimGlow />

        {/* Controls */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

        {/* ✨ Strong Glow */}
        <EffectComposer>
          <Bloom
            intensity={2.5}
            luminanceThreshold={0}
            luminanceSmoothing={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
