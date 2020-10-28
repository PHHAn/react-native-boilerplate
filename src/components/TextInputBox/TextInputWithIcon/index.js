import React from 'react';
import styles from './styles';
import {View, Icon, Input} from 'native-base';
import AppText from 'components/AppText';
import {COLOR_TEXT_SECONDARY} from 'constants/colors';

function TextInputWithIcon(
  placeholder,
  containerStyle,
  textInputStyle,
  keyboardType,
  error,
  messageError,
  icon,
  typeIcon,
  ...otherProps
) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <Icon name={icon} type={typeIcon} style={styles.icon} />
      </View>
      <View
        style={[
          styles.container,
          containerStyle,
          error ? styles.heightWithError : {},
        ]}>
        {error && <AppText style={styles.txtError}>{messageError}</AppText>}
        <Input
          placeholder={placeholder}
          style={[styles.textInput, textInputStyle]}
          placeholderTextColor={COLOR_TEXT_SECONDARY}
          keyboardType={keyboardType}
          {...otherProps}
        />
        <View style={styles.underLine} />
      </View>
    </View>
  );
}

export default React.memo(TextInputWithIcon);
