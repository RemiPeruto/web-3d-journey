import React, {useEffect} from 'react';
import {CssCanvasContainer} from "./canvas.style";

const CssCanvas = () => {
    useEffect(() => {

    }, []);

    return(
    <CssCanvasContainer>
        <img src ="/assets/deer.png"  alt="deer"/>
    </CssCanvasContainer>
    );
}
export default CssCanvas;