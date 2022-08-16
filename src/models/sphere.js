import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three';
import { useFrame } from '@react-three/fiber';

export function SphereModel(props) {
  const earthRef = useRef();
  const { nodes, materials } = useGLTF('/models/shpere.glb');
  const [colorMap, metallnessMap, roughnessMap, normalMap] = useTexture([
    '/textures/aerial_rocks_02_diff_1k.jpg',
    '/textures/aerial_rocks_02_diff_1k.jpg',
    '/textures/aerial_rocks_02_rough_ao_1k.jpg',
    '/textures/aerial_rocks_02_nor_gl_1k.jpg',
  ]);

  useFrame(
    ({ clock }) => (earthRef.current.rotation.z = clock.getElapsedTime() / 10)
  );
  return (
    <group {...props} dispose={null} ref={earthRef}>
      <mesh
        map
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        rotation={[Math.PI * 0.5, 0, 0]}
        scale={[5, 2, 5]}
      >
        <meshStandardMaterial
          map={colorMap}
          map-wrapT={RepeatWrapping}
          map-wrapS={RepeatWrapping}
          map-repeat={[10, 10]}
          // metalnessMap={metallnessMap}
          roughness={1}
          metallness={0}
          roughnessMap={roughnessMap}
          roughnessMap-wrapT={RepeatWrapping}
          roughnessMap-wrapS={RepeatWrapping}
          normalMap={normalMap}
          normalMap-wrapT={RepeatWrapping}
          normalMap-wrapS={RepeatWrapping}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/shpere.glb');
