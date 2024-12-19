import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import { useDataStore } from '../../../stores/dataStore';

export function NetworkGraph3D() {
  const nodes = useDataStore(state => state.networkNodes);
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.001;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <Sphere args={[0.2, 16, 16]}>
            <meshStandardMaterial color={node.color} />
          </Sphere>
          {node.connections.map((connection, j) => (
            <Line
              key={j}
              points={[node.position, nodes[connection].position]}
              color={node.color}
              lineWidth={1}
            />
          ))}
        </group>
      ))}
    </group>
  );
}