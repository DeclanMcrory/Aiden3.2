import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Text3D } from '@react-three/drei';
import { useDataStore } from '../../../stores/dataStore';

export function BarChart3D() {
  const data = useDataStore(state => state.metrics);
  const [barProps, barApi] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  useFrame(() => {
    barApi.start({
      scale: [1, 1 + Math.sin(Date.now() * 0.001) * 0.2, 1],
    });
  });

  return (
    <group position={[-6, 0, 0]}>
      {data.map((value, i) => (
        <group key={i} position={[i * 2, 0, 0]}>
          <animated.mesh {...barProps}>
            <boxGeometry args={[0.5, value / 20, 0.5]} />
            <meshStandardMaterial color={`hsl(${i * 50}, 70%, 50%)`} />
          </animated.mesh>
          <Text3D
            position={[0, -1, 0]}
            size={0.2}
            height={0.1}
            font="/fonts/helvetiker_regular.typeface.json"
          >
            {value.toFixed(0)}
          </Text3D>
        </group>
      ))}
    </group>
  );
}