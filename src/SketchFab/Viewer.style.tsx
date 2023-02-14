import styled from 'styled-components';

export const SketchFabViewerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: space-between;
  
  padding: 40px; 
`;

export const StyledIframe = styled.iframe`
  width: 900px;
  height: 700px;
  border: none;
  border-radius: 10px;
`;

export const StyledBackgroundColorButtonContainer = styled.div`
    display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledBackgroundColorButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: grey;
  color: blue;
  border: none;
`;