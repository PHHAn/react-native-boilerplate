import React from 'react';
import {View} from 'react-native';
import I18n from 'utils/i18n';
import styles from './styles';
import AppText from 'components/AppText';

function EmptyData({value, style}) {
  return (
    <View style={[styles.container, style]}>
      <AppText bold>{value || I18n.t('common.emptyData')}</AppText>
    </View>
  );
}

export default React.memo(EmptyData);
