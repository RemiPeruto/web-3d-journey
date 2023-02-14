import React, {Suspense} from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {ThreeCanvasContainer} from "./canvas.style";

const Model: React.FC = (): JSX.Element => {
    const cat = 'assets/chinese_cat__that_is_actually_japanese/scene.gltf';
    const deer = 'assets/deer_animations/scene.gltf';
    const dragon = 'assets/black_dragon_with_idle_animation/scene.gltf';
    const gltf = useLoader(GLTFLoader, deer);

    return (
        <Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </Suspense>
    );
}
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'] as const
type ColorKey = typeof COLORS[number]
function isColorKey(colorKey: string): colorKey is ColorKey {
    return COLORS.includes(colorKey as ColorKey)
}
const ThreeCanvas = () => {
    console.log(isColorKey('red'));
    console.log(isColorKey('lama'));
    return(
        <ThreeCanvasContainer>
            <Canvas>
                <ambientLight intensity={1.0} />
                <Model />
                <OrbitControls />
            </Canvas>
        </ThreeCanvasContainer>
    );
}

export default ThreeCanvas;