import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './Home.styles';
import AppImage from 'components/AppImage';
import withLoading from 'components/HOC/withLoading';
import AppButton from 'components/AppButton';
import ScrollViewPullRefresh from 'components/ScrollViewPullRefresh';

function HomeView(props) {
  const {onPressTestApi} = props;
  return (
    <ScrollViewPullRefresh safeArea>
      <View style={styles.container}>
        <AppImage url="https://github.com/DylanVann/react-native-fast-image/raw/master/docs/assets/priority.gif" />
        <Text>Home Screen</Text>
        <AppButton
          style={styles.btnLogin}
          title={'Test Api'}
          onPress={onPressTestApi}
        />
      </View>
    </ScrollViewPullRefresh>
  );
}

export default withLoading(HomeView);
