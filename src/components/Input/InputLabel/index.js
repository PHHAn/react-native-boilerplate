import React from 'react';
import {Item, Input, Label} from 'native-base';
import PropTypes from 'prop-types';

function InputLabel({value, placeholder, floatingLabel, last}) {
  return (
    <Item floatingLabel={floatingLabel} last={last}>
      <Label>{placeholder}</Label>
      <Input value={value} />
    </Item>
  );
}

InputLabel.propTypes = {
  value: PropTypes.string,
};

export default React.memo(InputLabel);
