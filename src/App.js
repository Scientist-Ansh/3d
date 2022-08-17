import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useEffect, Suspense, useRef } from 'react';

import Loader from './Components/Loader';
import PlaneModel from './models/plane';
import { SphereModel } from './models/sphere';

import { AxesHelper } from 'three';
import { CloudModel } from './models/clouds';

import lerp from '@14islands/lerp';

function CameraParallax() {
  const { camera } = useThree();
  useFrame(({ mouse }, delta) => {
    camera.position.x = lerp(camera.position.x, mouse.x, 0.05, delta);
    // camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0.5, 4] }}>
      <CameraParallax />

      <Suspense fallback={<Loader />}>
        {/* <primitive object={new AxesHelper(10)} /> */}
        <PlaneModel rotation={[0, Math.PI, 0]} />
        <SphereModel position={[0, -5.5, 3]} />
        <CloudModel position={[3, 0, 0]} scale={1} />
        <CloudModel position={[-3, 1, 0]} scale={1} />
        <CloudModel
          position={[4, 2, 0.5]}
          scale={2}
          rotation={[Math.PI * 0.25, 0, 0]}
        />
        <CloudModel
          position={[-5, 2, -1]}
          rotation={[Math.PI * 0.25, 0, 0]}
          scale={1}
        />
        <Environment files={'montorfano_1k.hdr'} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
