import React, {Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ThreeCanvas from './ThreeCanvas';
import CssCanvas from './Css';
import ViewerComponent from './SketchFab';
import SplineComponent from "./Spline";
import UnityCanvas from "./Unity";
import BabylonCanvas from "./BabylonJS";

export const PATHS: Record<string, string> = {
    THREE: '/three',
    SKETCHFAB: '/sketchfab',
    CSS: '/css',
    SPLINE: '/spline',
    UNITY: '/unity',
    BABYLON: '/babylon',
};

const routes = (): JSX.Element => (
    <Suspense fallback={<div> petit loader fraté </div>}>
        <Routes>
            <Route path={PATHS.THREE} element={<ThreeCanvas/>}/>
            <Route path={PATHS.SKETCHFAB} element={<ViewerComponent/>}/>
            <Route path={PATHS.CSS} element={<CssCanvas/>}/>
            <Route path={PATHS.SPLINE} element={<SplineComponent/>}/>
            <Route path={PATHS.UNITY} element={<UnityCanvas/>}/>
            <Route path={PATHS.BABYLON} element={<BabylonCanvas/>}/>

            <Route path={''} element={<ViewerComponent/>}/>
        </Routes>
    </Suspense>

);

export default routes;