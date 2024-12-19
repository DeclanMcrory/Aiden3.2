import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { useDataStore } from '../../../stores/dataStore';

export function WaveForm3D() {
  const waveData = useDataStore(state => state.waveform);
  
  return (
    <group position={[6, 0, 0]}>
      <Line
        points={waveData.map((y, x) => [x * 0.2 - 2, y, 0])}
        color="cyan"
        lineWidth={2}
      />
    </group>
  );
}