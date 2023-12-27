'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
//@ts-ignore
import { TextureLoader } from 'three/src/loaders/TextureLoader';
export default function CubeComponent() {
  return (
    <div className='h-screen'>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={2} />
        {/* three js coordinate system */}
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}
function Cube() {
  const mesh = useRef<any>(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.z += delta * 0.25;
  });
  const texter_1 = useLoader(TextureLoader, '/assets/237504.jpg');
  const texter_2 = useLoader(TextureLoader, '/assets/496487.jpg');
  const texter_3 = useLoader(TextureLoader, '/assets/1130529.jpg');
  const texter_4 = useLoader(TextureLoader, '/assets/2783292.jpg');
  const texter_5 = useLoader(TextureLoader, '/assets/6898222.jpg');
  const texter_6 = useLoader(TextureLoader, '/assets/945180.png');
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texter_1} attach='material-0' />
      <meshStandardMaterial map={texter_2} attach='material-1' />
      <meshStandardMaterial map={texter_3} attach='material-2' />
      <meshStandardMaterial map={texter_4} attach='material-3' />
      <meshStandardMaterial map={texter_5} attach='material-4' />
      <meshStandardMaterial map={texter_6} attach='material-5' />
    </mesh>
  );
}
