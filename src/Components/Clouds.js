import { useRef } from 'react';
import { CloudModel } from '../models/clouds';
import { useFrame } from '@react-three/fiber';

const Clouds = () => {
  const cloudsRef = useRef();
  // useFrame(({ clock }) => {
  //   cloudsRef.current.rotation.z += 0.003;
  // });
  return (
    <group ref={cloudsRef}>
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
    </group>
  );
};

export default Clouds;
