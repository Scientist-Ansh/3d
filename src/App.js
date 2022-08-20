import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  SpotLight,
  useHelper,
  Shadow,
} from "@react-three/drei";
import { useEffect, Suspense, useRef, useState } from "react";

import Loader from "./Components/Loader";
import PlaneModel from "./models/plane";
import { SphereModel } from "./models/sphere";

import { AxesHelper, PointLightHelper, SpotLightHelper } from "three";

import lerp from "@14islands/lerp";
import HandPoseDetection from "./Components/HandPoseDetection";
import Clouds from "./Components/Clouds";

function CameraParallax() {
  const { camera } = useThree();
  useFrame(({ mouse }, delta) => {
    camera.position.x = lerp(camera.position.x, mouse.x, 0.05, delta);
    // camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  });
}

const Lights = () => {
  const sun = useRef();
  const moon = useRef();
  const lightsRef = useRef();
  // useHelper(sun, PointLightHelper);
  // useHelper(moon, PointLightHelper);

  useFrame(({ clock }) => {
    lightsRef.current.rotation.z -= 0.003;
  });

  return (
    <group ref={lightsRef}>
      {/* <ambientLight intensity={0.1} color="white" position={[0, 5, 0]} /> */}
      <directionalLight
        ref={sun}
        castShadow
        intensity={0.3}
        color="white"
        position={[0, 16, 4]}
      />
      <directionalLight
        ref={moon}
        castShadow
        intensity={0.02}
        color="white"
        position={[0, -16, 0]}
      />
    </group>
  );
};

export default function App() {
  const [planePosition, setPlanePosition] = useState([-0.3, -0.2, 1]);

  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 4] }} shadows>
        <Lights />
        <CameraParallax />

        <Suspense fallback={<Loader />}>
          {/* <primitive object={new AxesHelper(10)} /> */}
          <PlaneModel
            planePosition={planePosition}
            setPlanePosition={setPlanePosition}
          />
          <SphereModel position={[0, -11, 2]} />
          <Clouds />

          {/* <Environment files={'montorfano_1k.hdr'} /> */}
          <Environment files={"dikhololo_night_1k.hdr"} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      {/* <HandPoseDetection setPlanePosition={setPlanePosition} /> */}
    </>
  );
}
