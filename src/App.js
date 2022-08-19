import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  Environment,
  SpotLight,
  useHelper,
} from '@react-three/drei';
import { useEffect, Suspense, useRef, useState } from 'react';

import Loader from './Components/Loader';
import PlaneModel from './models/plane';
import { SphereModel } from './models/sphere';

import { AxesHelper, SpotLightHelper } from 'three';
import { CloudModel } from './models/clouds';

import lerp from '@14islands/lerp';
import HandPoseDetection from './Components/HandPoseDetection';

function CameraParallax() {
  const { camera } = useThree();
  useFrame(({ mouse }, delta) => {
    camera.position.x = lerp(camera.position.x, mouse.x, 0.05, delta);
    // camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });
}

const Lights = () => {
  const light = useRef();
  useHelper(light, SpotLightHelper, 'red');
  return (
    <SpotLight
      castShadow
      ref={light}
      position={[0, 3, -1]}
      distance={5}
      angle={0.7}
      attenuation={5}
      anglePower={20} // Diffuse-cone anglePower (default: 5)
    />
  );
};

export default function App() {
  const [planePosition, setPlanePosition] = useState([-0.3, -0.3, 1]);

  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 4] }} shadowMap>
        {/* <Lights /> */}
        <CameraParallax />

        <Suspense fallback={<Loader />}>
          {/* <primitive object={new AxesHelper(10)} /> */}
          <PlaneModel
            planePosition={planePosition}
            setPlanePosition={setPlanePosition}
          />
          <SphereModel position={[0, -5.5, 2]} />
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
      <HandPoseDetection setPlanePosition={setPlanePosition} />
    </>
  );
}
