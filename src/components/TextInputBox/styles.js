import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';
import {FONT_SIZE, FONT_FAMILY, ICON_SIZE} from 'constants/appFonts';
import {
  COLOR_BACKGROUND,
  COLOR_TEXT_PRIMARY,
  COLOR_GRAY_TEXT,
} from 'constants/colors';
import {
  DEFAULT_PADDING_VERTICAL,
  DEFAULT_PADDING_HORIZONTAL,
  BORDER_RADIUS_TEXT_INPUT,
} from 'constants/size';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR_BACKGROUND,
    height: scalePortrait(50),
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    borderRadius: BORDER_RADIUS_TEXT_INPUT,
    marginTop: DEFAULT_PADDING_VERTICAL,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: FONT_SIZE.FIT,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLOR_TEXT_PRIMARY,
  },
  txtError: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: 'red',
    fontSize: FONT_SIZE.SMALL - 2,
    fontStyle: 'italic',
    paddingHorizontal: scalePortrait(5),
    marginBottom: -scalePortrait(15),
  },
  heightWithError: {
    height: scalePortrait(60),
  },
  icon: {
    fontSize: ICON_SIZE.NORMAL,
    color: COLOR_GRAY_TEXT,
  },
  label: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: FONT_SIZE.SMALL,
  },
});
