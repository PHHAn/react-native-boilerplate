import React from 'react';
import {Spinner, View} from 'native-base';
import {COLOR_PRIMARY} from 'constants/colors';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

function withLoading(Component) {
  return React.memo(props => {
    const {isLoading} = props;
    if (!isLoading) {
      return <Component {...props} />;
    }
    return (
      <View style={style.container}>
        <Spinner color={COLOR_PRIMARY} />
      </View>
    );
  });
}
export default withLoading;
