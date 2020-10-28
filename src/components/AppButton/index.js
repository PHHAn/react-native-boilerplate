/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ViewPropTypes} from 'react-native';
import {Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import AppText from 'components/AppText';
import styles from './styles';

function AppButton({
  title,
  onPress,
  style,
  titleStyle,
  leftIcon,
  rightIcon,
  icon,
  typeIcon,
  iconStyle,
  ...otherProps
}) {
  return (
    <Button
      block
      {...otherProps}
      onPress={onPress}
      style={[styles.defaultButton, style]}>
      {leftIcon && (
        <Icon name={icon} type={typeIcon} style={[styles.icon, iconStyle]} />
      )}
      <AppText bold large style={{color: '#fff', ...titleStyle}}>
        {title}
      </AppText>
      {rightIcon && (
        <Icon name={icon} type={typeIcon} style={[styles.icon, iconStyle]} />
      )}
    </Button>
  );
}

AppButton.propTypes = {
  colorLinear: PropTypes.array,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  titleStyle: PropTypes.any,
  style: ViewPropTypes.style,
};

AppButton.defaultProps = {
  title: 'NONE',
};

export default React.memo(AppButton);
