import React from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMG_NO_IMAGE} from 'assets/path';
import styles from './styles';
import PropTypes from 'prop-types';

function AppImage({style, source, url, ...rest}) {
  const sour = source || {uri: url};
  if (!sour.uri) {
    return (
      <Image
        {...rest}
        resizeMode="stretch"
        style={[styles.container, style]}
        source={IMG_NO_IMAGE}
      />
    );
  }

  return (
    <FastImage {...rest} style={[styles.container, style]} source={sour} />
  );
}

AppImage.propTypes = {
  style: PropTypes.any,
  source: PropTypes.any,
};

export default React.memo(AppImage);
