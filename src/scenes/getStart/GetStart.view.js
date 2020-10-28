import * as React from 'react';
import {View} from 'react-native';
import styles from './GetStart.styles';
import {Spinner} from 'native-base';
import {COLOR_PRIMARY} from 'constants/colors';

export function GetStartView() {
  return (
    <View style={styles.container}>
      <Spinner color={COLOR_PRIMARY} />
    </View>
  );
}
