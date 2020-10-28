import React, {useMemo} from 'react';
import {Text} from 'native-base';
import PropTypes from 'prop-types';
import {mapPropsToFontStyle} from 'utils/styleHelper';

const AppText = props => {
  const {style} = props;
  const styles = useMemo(
    () => [mapPropsToFontStyle(props), style],
    [props, style],
  );
  return (
    <Text {...props} style={styles}>
      {props.children || ''}
    </Text>
  );
};

AppText.propTypes = {
  numberOfLines: PropTypes.number,
};

AppText.defaultProps = {};

export default React.memo(AppText);
