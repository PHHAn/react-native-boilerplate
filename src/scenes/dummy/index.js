import React, {useState, useCallback, useMemo} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppButton from 'components/AppButton';
import ModalPicker from 'components/Modal/ModalPicker';

const listItem = [
  {title: 'All Categories', image: ''},
  {title: 'Chili paste', image: ''},
  {title: 'Miso', image: ''},
  {title: 'Burger', image: ''},
  {title: 'Soup', image: ''},
  {title: 'Juice', image: ''},
  {title: 'Snacks', image: ''},
  {title: 'Salty', image: ''},
];

const ITEM_HEIGHT = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 80,
  },
});

export default function DummyScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const styleList = useMemo(
    () => ({
      backgroundColor: 'red',
      height: 200,
    }),
    [],
  );
  // const styleList = {
  //   backgroundColor: 'red',
  //   height: 200,
  // };

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <AppButton
        onPress={() => {
          setIsOpen(!isOpen);
        }}
        title={'Open Modal'}
      />
      <ModalPicker isOpen={isOpen} onClose={onClose} data={listItem} />
    </View>
  );
}
