import {StyleSheet} from 'react-native';
import {FONT_SIZE, FONT_FAMILY, ICON_SIZE} from 'constants/appFonts';
import {
  COLOR_BACKGROUND,
  COLOR_TEXT_PRIMARY,
  COLOR_PRIMARY,
} from 'constants/colors';
import {DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: scalePortrait(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_BACKGROUND,
    marginVertical: DEFAULT_PADDING_VERTICAL,
    paddingVertical: scalePortrait(5),
  },
  container: {
    // ...appShadow.shadow,
    height: scalePortrait(40),
    borderRadius: scalePortrait(5),
    flex: 1,
    paddingHorizontal: scalePortrait(5),
  },
  textInput: {
    fontSize: FONT_SIZE.FIT,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLOR_TEXT_PRIMARY,
  },
  txtError: {
    textAlign: 'left',
    color: 'red',
    fontSize: FONT_SIZE.SMALL,
    fontStyle: 'italic',
    paddingHorizontal: scalePortrait(5),
    marginBottom: -scalePortrait(15),
  },
  heightWithError: {
    height: scalePortrait(50),
  },
  iconContainer: {
    height: scalePortrait(40),
    width: scalePortrait(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scalePortrait(3),
  },
  icon: {
    fontSize: ICON_SIZE.NORMAL,
    color: COLOR_PRIMARY,
  },
  underLine: {
    height: 1,
    backgroundColor: '#a6a6a6',
  },
});
