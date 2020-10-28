import {Platform, StyleSheet} from 'react-native';
import FONT_CONST from 'constants/appFonts';
import {COLOR_PALE_GREY_TWO} from 'constants/colors';
const {FONT_FAMILY, FONT_SIZE} = FONT_CONST;

/*
  map props to Fontstyles
*/
export function mapPropsToFontStyle(props) {
  // font size (regular, bold, light, ..) (default regular)
  const {small, fit, large} = props;
  // font family (regular, bold, light, ..) (default regular)
  const {bold, light, medium} = props;
  const size = small ? 'small' : fit ? 'fit' : large ? 'large' : 'normal';
  const family = bold
    ? 'bold'
    : light
    ? 'light'
    : medium
    ? 'medium'
    : 'regular';
  const newProps = {
    fontSize: FONT_SIZE[`${size.toUpperCase()}`],
    fontFamily: FONT_FAMILY[`${family.toUpperCase()}`],
  };
  return newProps;
}

export const appShadow = StyleSheet.create({
  shadow: {
    shadowOffset: {
      height: 20,
      width: 0,
    },
    shadowColor: 'rgba(194, 194, 194, 0.3)',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    ...Platform.select({
      android: {
        borderBottomColor: COLOR_PALE_GREY_TWO,
        borderBottomWidth: 0.5,
      },
    }),
  },
});
