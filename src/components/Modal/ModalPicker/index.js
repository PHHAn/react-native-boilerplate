import React from 'react';
import {View, Image} from 'react-native';
import ModalView from 'react-native-modal';
import styles from './styles';
import AppText from 'components/AppText';
import {DEVICE_HEIGHT} from 'constants/size';
import {COLOR_BACKGROUND} from 'constants/colors';

function ModalPicker({isOpen, data, onClose}) {
  return (
    <ModalView
      isVisible={isOpen}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View
          style={{
            height: (DEVICE_HEIGHT * 2) / 3,
            backgroundColor: COLOR_BACKGROUND,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          {data.map((item, idx) => {
            return (
              <View key={idx}>
                {item.image ? (
                  <View>
                    <Image source={{uri: item.image}} />
                  </View>
                ) : (
                  <View />
                )}
                <View>
                  <AppText>{item.title}</AppText>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ModalView>
  );
}

export default React.memo(ModalPicker);
