import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ThreeCanvasContainer } from "./canvas.style";

const Model: React.FC = (): JSX.Element => {
  const cat = "assets/chinese_cat__that_is_actually_japanese/display.gltf";
  const deer = "assets/deer_animations/display.gltf";
  const dragon = "assets/black_dragon_with_idle_animation/display.gltf";
  const gltf = useLoader(GLTFLoader, deer);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};

const ThreeCanvas = () => {
  return (
    <ThreeCanvasContainer>
      <Canvas>
        <ambientLight intensity={1.0} />
        <Model />
        <OrbitControls />
      </Canvas>
    </ThreeCanvasContainer>
  );
};

export default ThreeCanvas;
