import React from 'react';
import AppText from 'components/AppText';

/*
    Props
      fontSize: default normal
      - small
      - normal
      - fix
      - large

      fontFamily: default regular
      - regular
      - bold
      - light
      - medium
*/

function exampleTextComponent() {
  return (
    <AppText
      small // fontSize small
      bold // fontFamily bold
      style={{}}>
      example
    </AppText>
  );
}

export default exampleTextComponent;
