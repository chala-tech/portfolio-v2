import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";


export default function Model() {
  const meshRef = useRef();
  const { pointer } = useThree();

  useFrame((state, delta) => {
    
    meshRef.current.rotation.y += delta * 0.15;

    
    const targetX = pointer.y * 0.4;
    const targetZ = pointer.x * -0.4;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (targetZ - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color="#00f0ff" wireframe />
    </mesh>
  );
}