import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


export default function Model() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color="#00f0ff" wireframe />
    </mesh>
  );
}