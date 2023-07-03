import {Dimensions} from 'react-native';
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export const {height: NH, width: NW} = Dimensions.get('screen');
export const videoHeight = 230;
export const videoInfoHeight = 220;

export {RH, RW, RF};
