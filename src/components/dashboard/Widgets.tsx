import React from 'react';
import { Text3D } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

export function Widgets() {
  const [spring] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  return (
    <group position={[0, -3, 0]}>
      {[...Array(3)].map((_, i) => (
        <group key={i} position={[-3 + i * 3, 0, 0]}>
          <animated.mesh {...spring}>
            <planeGeometry args={[2, 2]} />
            <meshStandardMaterial color={`hsl(${i * 80}, 70%, 50%)`} />
          </animated.mesh>
          <Text3D
            position={[0, 0, 0.1]}
            size={0.2}
            height={0.1}
            font="/fonts/helvetiker_regular.typeface.json"
          >
            {`Widget ${i + 1}`}
          </Text3D>
        </group>
      ))}
    </group>
  );
}