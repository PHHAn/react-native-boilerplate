import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY} from 'constants/colors';
import {ICON_SIZE} from 'constants/appFonts';
import {BORDER_RADIUS_BUTTON} from 'constants/size';

export default StyleSheet.create({
  linearContainer: {
    borderRadius: BORDER_RADIUS_BUTTON,
    alignItems: 'center',
  },
  defaultButton: {
    borderRadius: BORDER_RADIUS_BUTTON,
    alignItems: 'center',
    // flex: 1,
    backgroundColor: COLOR_PRIMARY,
  },
  icon: {
    color: '#fff',
    fontSize: ICON_SIZE.NORMAL,
  },
});
