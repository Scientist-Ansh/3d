import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Colors } from '../utils/colors';

export function CloudModel(props) {
  const { nodes, materials } = useGLTF('/models/clouds.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        rotation={[-0.05, 0.16, -0.35]}
        material-color={Colors.white}
      >
        <meshStandardMaterial color={Colors.white} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.1, 0.05, 0.09]}
        rotation={[0.19, -0.13, -0.26]}
      >
        <meshStandardMaterial color={Colors.white} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.19, -0.07, 0.02]}
        rotation={[0.18, -0.06, 0.22]}
        scale={[0.93, 0.72, 1.03]}
      >
        <meshStandardMaterial color={Colors.white} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0.01, -0.08, 0.14]}
        rotation={[-0.31, -0.05, 0.26]}
        scale={[1, 0.77, 1]}
      >
        <meshStandardMaterial color={Colors.white} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-0.13, -0.08, 0.15]}
        scale={0.61}
      >
        <meshStandardMaterial color={Colors.white} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.16, -0.01, 0.03]}
        scale={0.57}
      >
        <meshStandardMaterial color={Colors.white} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/clouds.glb');
