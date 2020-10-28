import React from 'react';

import styles from './styles';
import {Container} from 'native-base';
const AppContainer = ({style, children}) => (
  <Container style={[styles.container, style]}>{children}</Container>
);

export default AppContainer;
