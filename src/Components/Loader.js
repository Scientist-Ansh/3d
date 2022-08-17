import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Loader() {
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
