import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityCanvas = () => {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "deerDemo/Build/deerDemo.loader.js",
        dataUrl: "deerDemo/Build/deerDemo.data",
        frameworkUrl: "deerDemo/Build/deerDemo.framework.js",
        codeUrl: "deerDemo/Build/deerDemo.wasm",
    });

    return (
        <div>
            {!isLoaded && <div>
                <span>Loading ... {loadingProgression * 100} %</span>
            </div>}
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }}/>
        </div>);
}

export default UnityCanvas;