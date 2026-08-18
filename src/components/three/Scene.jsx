import { Canvas } from "@react-three/fiber";
import Model from "./Model";


export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <Model />
    </Canvas>
  );
}