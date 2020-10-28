import {StyleSheet} from 'react-native';
import {
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
} from 'constants/size';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  btnLogin: {
    marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
    marginVertical: DEFAULT_PADDING_VERTICAL / 2,
  },
});
