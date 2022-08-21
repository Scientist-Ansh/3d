/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Colors } from "../utils/colors";
import { useFrame } from "@react-three/fiber";
import lerp from "@14islands/lerp";

import { animated, useSpring } from "@react-spring/three";

export default function PlaneModel({ planePosition, setPlanePosition }, props) {
  const planeRef = useRef();
  const bladeRef = useRef();
  const { nodes, materials } = useGLTF("/models/plane.glb");

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function handleKey(e) {
    if (e.key === "ArrowDown") {
      setPlanePosition([-0.3, -0.3, 1]);
    } else if (e.key === "ArrowUp") {
      setPlanePosition([0.3, 1.2, 1]);
    }
  }

  useFrame(({ clock, mouse }, delta) => {
    if (planePosition[1] <= 0 || planeRef.current.position.y <= 0) {
      bladeRef.current.rotation.x = clock.getElapsedTime() * 5;
    } else {
      bladeRef.current.rotation.x =
        clock.getElapsedTime() * planeRef.current.position.y * 20;
    }
  });

  const springProps = useSpring({
    position: planePosition,
    config: { mass: 10, tension: 15 },
  });

  function handlePlanePosition() {
    if (planePosition[0] === -0.3) {
      setPlanePosition([0.3, 1.2, 1]);
    } else {
      setPlanePosition([-0.3, -0.2, 1]);
    }
  }

  return (
    <>
      <animated.group
        {...props}
        dispose={null}
        ref={planeRef}
        {...springProps}
        rotation={[0, Math.PI, 0]}
        onClick={handlePlanePosition}
        castShadow
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body.geometry}
          material={nodes.body.material}
          scale={[0.13, 0.1, 0.1]}
          material-color={Colors.red}
        >
          <meshStandardMaterial color={Colors.red} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.front.geometry}
          material={nodes.front.material}
          position={[0.05, 0, 0]}
          scale={[0.18, 0.1, 0.1]}
        >
          <meshStandardMaterial color={Colors.white} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rotar.geometry}
          material={nodes.rotar.material}
          position={[0.05, 0, 0]}
          scale={[0.18, 0.1, 0.1]}
        />
        <mesh
          ref={bladeRef}
          castShadow
          receiveShadow
          geometry={nodes.blade.geometry}
          material={nodes.blade.material}
          position={[-0.22, 0, 0]}
          scale={[0.18, 0.77, 0.1]}
        >
          <meshStandardMaterial color={Colors.brown} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tail.geometry}
          material={nodes.tail.material}
          position={[0.13, 0.06, 0]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.29, -0.15, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wings.geometry}
          material={nodes.wings.material}
          position={[-0.01, 0.04, 0]}
          rotation={[-1.57, Math.PI / 2, 0]}
          scale={[0.18, 1.19, 0.24]}
        />
      </animated.group>
    </>
  );
}

useGLTF.preload("/models/plane.glb");
