import * as React from 'react';
import {View} from 'react-native';
import styles from './Profile.styles';
import Avatar from 'components/Avatar';
import AppButton from 'components/AppButton';
import AppText from 'components/AppText';

export default function ProfileView(props) {
  const {onPressAvatar, urlAvatar, increment, decrement, count} = props;
  return (
    <View style={styles.container}>
      <AppText>{count}</AppText>
      <Avatar uri={urlAvatar} onPress={onPressAvatar} />
      <AppButton style={styles.btnLogin} title={'+'} onPress={increment} />
      <AppButton style={styles.btnLogin} title={'-'} onPress={decrement} />
    </View>
  );
}
