import {Dimensions} from 'react-native';
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';

export const {height: NH, width: NW} = Dimensions.get('screen');
export {RH, RW, RF};
