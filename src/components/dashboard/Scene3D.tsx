import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BarChart3D } from './visualizations/BarChart3D';
import { NetworkGraph3D } from './visualizations/NetworkGraph3D';
import { WaveForm3D } from './visualizations/WaveForm3D';
import { useDataStore } from '../../stores/dataStore';

export function Scene3D() {
  const { updateMetrics, updateNetwork, updateWaveform } = useDataStore();

  useEffect(() => {
    const interval = setInterval(() => {
      updateMetrics();
      updateNetwork();
      updateWaveform();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateMetrics, updateNetwork, updateWaveform]);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 15], fov: 50 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <BarChart3D />
      <NetworkGraph3D />
      <WaveForm3D />
    </Canvas>
  );
}