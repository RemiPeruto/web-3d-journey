import styled from 'styled-components';

export const CssCanvasContainer = styled.div`
  @keyframes rotate{
    to{ transform:  rotate3d(1, 1, 1, 360deg); }
  }
  animation: rotate 3s linear infinite;
  width: 1000px;
  height: 800px;
  background-color: red;
  display: flex;
  justify-content: center;
  padding: 40px;
`;

