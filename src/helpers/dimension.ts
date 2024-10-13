// imports
import { Dimensions } from 'react-native';

// declare the types for our dimension variables
let deviceWidth: number;
let deviceHeight: number;
let deviceScale: number;

// get the dimensions
({ width: deviceWidth, height: deviceHeight, scale: deviceScale } = Dimensions.get('window'));

/*
 * @Function() wp
 * @Description() This function returns the width of the device in percentage
 * @Params() percentage
 * @Return() number
 *
*/
export const wp = (percentage: number): number => {
    if (percentage < 0 || percentage > 100) {
        // throw error
        throw new Error('Percentage must be between 0 and 100');
    }

    // return
    return Math.round((percentage / 100) * deviceWidth) / deviceScale;
};

/*
 * @Function() hp
 * @Description() This function returns the height of the device in percentage
 * @Params() percentage
 * @Return() number
 *
*/
export const hp = (percentage: number): number => {
    if (percentage < 0 || percentage > 100) {
        // throw error
        throw new Error('Percentage must be between 0 and 100');
    }
    
    // return
    return Math.round((percentage / 100) * deviceHeight) / deviceScale;
};
