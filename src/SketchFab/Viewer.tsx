import React, { useEffect, useRef, useState } from "react";
import {
    SketchFabViewerContainer,
    StyledBackgroundColorButton,
    StyledBackgroundColorButtonContainer,
    StyledIframe
} from "./Viewer.style";
const Sketchfab = require('@sketchfab/viewer-api/viewer-api.js');

const soldier = '7w7pAfrCfjovwykkEeRFLGw5SXS';
const lama = '18953cd2bcc0464aaae293d0835cf99f';
const dragon = '0b8d35c9e9c34ba290f896c335e77159';
const deer = 'e40b5345daaf4dee85e650942db057a8';
const snowFlake = 'ee546edb6c7b4f2bad5a679d8c573761';

const useSketchfabViewer = () => {
    // This ref will contain the actual iframe object
    const viewerIframeRef = useRef(null);
    const [api, setApi] = useState();

    const ViewerIframe = (
        <StyledIframe
            // We feed the ref to the iframe component to get the underlying DOM object
            ref={viewerIframeRef}
            title="sketchfab-viewer"
        />
    );

    useEffect(
        () => {
            // Initialize the viewer
            // @ts-ignore
            let client = new Sketchfab(viewerIframeRef.current);
            client.init(deer, {
                success: setApi,
                error: () => {
                    console.log("Viewer error");
                },
            });
        },
        // We only want to initialize the viewer on first load, so we don't add any dependencies to useEffect
        []
    );

    return [ViewerIframe, api];
};

const Viewer = ({ apiRef }: any) => {
    const [ViewerIframe, api] = useSketchfabViewer();

    apiRef.current = api;

    return ViewerIframe ?? null;
};

const ViewerComponent = () => {
    const apiRef = useRef(null);

    const changeBackgroundColor = () => {
        // @ts-ignore
        apiRef.current.setBackground({
            color: [Math.random(), Math.random(), Math.random(), 1]
        });
    };

    return (
        <SketchFabViewerContainer className="SketchFabViewer">
            <StyledBackgroundColorButtonContainer>
                <StyledBackgroundColorButton onClick={changeBackgroundColor}>Change my Background color</StyledBackgroundColorButton>
            </StyledBackgroundColorButtonContainer>
            <Viewer apiRef={apiRef} />
        </SketchFabViewerContainer>
    );
}

export default ViewerComponent;
