import Spline from '@splinetool/react-spline';
import {SplineContainer} from './SplineComponent.style';
import {Application} from '@splinetool/runtime';

const SCENE_URL = 'https://prod.spline.design/FpFPwQfWdudeDVNs/scene.splinecode';
const OTHER_MODEL_URL = 'https://prod.spline.design/jDisMNW2hlJLCgOv/scene.splinecode';
const local_url = 'assets/jsonformatter.txt';
const onLoad: (spline: Application) => void = async (spline: Application) => {
    await spline.load(local_url);
}

const SplineComponent = () => {
    return (
        <SplineContainer>
            <Spline scene={OTHER_MODEL_URL} onLoad={onLoad}/>
        </SplineContainer>
    );
}

export default SplineComponent;
