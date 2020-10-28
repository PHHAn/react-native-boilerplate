import React from 'react';
import styles from './styles';
import {View, Image} from 'react-native';
import AppText from 'components/AppText';
import {DEVICE_HEIGHT} from 'constants/size';
import {COLOR_BACKGROUND} from 'constants/colors';
import ModalView from '../ModalView';

function ModalPicker({isOpen, data}) {
  return (
    <ModalView isVisible={isOpen}>
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
