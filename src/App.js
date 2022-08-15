import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useEffect, Suspense, useRef } from 'react';

import PlaneModel from './models/plane';
import { SphereModel } from './models/sphere';

import { AxesHelper } from 'three';
import { CloudModel } from './models/clouds';
/**
 * FE414 - Session 3
 */

function Loader() {
  const box = useRef();
  useFrame(({ clock }) => {
    box.current.rotation.x = clock.getElapsedTime();
    box.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <mesh ref={box}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 4] }}>
      <Suspense fallback={<Loader />}>
        <primitive object={new AxesHelper(10)} />
        <PlaneModel position={[0, 1.5, 1]} rotation={[0, Math.PI, 0]} />
        <SphereModel position={[0, -5, 6]} />
        <CloudModel position={[1, 1, 0]} scale={1} />
        <CloudModel position={[-3, 1, 0]} scale={1} />
        <CloudModel
          position={[4, 2, 0.5]}
          scale={2}
          rotation={[Math.PI * 0.25, 0, 0]}
        />
        <CloudModel position={[1, 1, 0]} scale={1} />
        <Environment files={'montorfano_1k.hdr'} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
