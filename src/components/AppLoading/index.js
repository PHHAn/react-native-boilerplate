import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {Spinner} from 'native-base';
import {COLOR_PRIMARY} from 'constants/colors';
// import AppText from 'components/AppText';

function AppLoading() {
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Spinner color={COLOR_PRIMARY} size="large" />
        {/* <AppText large>Loading...</AppText> */}
      </View>
    </View>
  );
}

export default React.memo(AppLoading);
