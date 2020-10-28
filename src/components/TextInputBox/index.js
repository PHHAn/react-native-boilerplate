/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Icon, Input} from 'native-base';
import AppText from 'components/AppText';
import {COLOR_TEXT_SECONDARY} from 'constants/colors';
import styles from './styles';

function TextInputBox({
  placeholder,
  containerStyle,
  textInputStyle,
  keyboardType,
  error,
  messageError,
  hasShadow,
  rightIcon,
  leftIcon,
  onPressRightIcon,
  label,
  onChangeText,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        error ? styles.heightWithError : {},
        hasShadow && styles.shadow,
      ]}>
      {error && <AppText style={styles.txtError}>{messageError}</AppText>}
      {label && <AppText style={styles.label}>{label}</AppText>}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            type="MaterialCommunityIcons"
            style={styles.icon}
          />
        )}
        <Input
          placeholder={placeholder}
          style={[styles.textInput, textInputStyle]}
          placeholderTextColor={COLOR_TEXT_SECONDARY}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          {...otherProps}
        />
        {rightIcon && (
          <Icon
            name={rightIcon}
            type="MaterialCommunityIcons"
            onPress={onPressRightIcon}
            style={styles.icon}
          />
        )}
      </View>
    </View>
  );
}

export default React.memo(TextInputBox);
