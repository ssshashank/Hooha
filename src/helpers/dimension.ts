import { Dimensions } from 'react-native';

const {
    width: deviceWidth,
    height: deviceHeight,
    scale: deviceScale,
} = Dimensions.get('window');

export const wp = (percentage: number): number => Math.round(percentage * deviceWidth) / deviceScale;
export const hp = (percentage: number): number => Math.round(percentage * deviceHeight) / deviceScale;

