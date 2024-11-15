import Svg, { Path } from 'react-native-svg';

interface PatternProps {
    width?: number;
    height?: number;
    color?: string
}

const CircleQuarterPattern: React.FC<PatternProps> = (props) => {
    const { width = 200, height = 200, color } = props;

    // return
    return (
        <Svg width={width} height={height} viewBox="0 0 480 480" fill={color}>
            <Path d="M480 240H240V0a240 240 0 0 1 240 240ZM240 480H0V240a240 240 0 0 1 240 240ZM480 480H240V240a240 240 0 0 1 240 240ZM240 240H0V0a240 240 0 0 1 240 240Z">
            </Path>
        </Svg>
    );
}

const TinyStepMirrorPattern: React.FC<PatternProps> = (props: any) => {
    const { width = 200, height = 200, color } = props;

    // return
    return (
        <Svg width={width} height={height} viewBox="0 0 480 480" fill={color}><Path d="M480 0H120v120h120v120h120v120h120V0zM0 480h360V360H240V240H120V120H0v360z"></Path></Svg>
    );
}


export {
    CircleQuarterPattern,
    TinyStepMirrorPattern
}
