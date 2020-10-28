import {Platform, Linking, Alert} from 'react-native';
import {showAlertNotification} from './alert';
import I18n from 'utils/i18n';
import {APP_ID} from 'constants/appConstants';

export async function openURL(url) {
  try {
    await Linking.openURL(url);
  } catch (error) {
    showAlertNotification({message: error.message});
  }
}

export function openGoogleMap({latitude, longitude}, title = 'Vị trí chọn') {
  try {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${latitude},${longitude}`;
    const label = title;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  } catch (error) {
    showAlertNotification({message: error.message});
  }
}

export function openGoogleMapWithAddress(address) {
  try {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
    );
  } catch (error) {
    showAlertNotification({message: error.message});
  }
}

export function showDialogRatingForApp(callback = () => {}) {
  const openStore = () => {
    //This is the main trick
    if (Platform.OS !== 'ios') {
      Linking.openURL(`market://details?id=${APP_ID.ANDROID}`)
        .then(() => {
          callback(true);
        })
        .catch(err => {
          console.log('>>>ERR', {err});
        });
    } else {
      Linking.openURL(
        `itms://itunes.apple.com/in/app/apple-store/${APP_ID.IOS}`,
      )
        .then(() => {
          callback(true);
        })
        .catch(err => {
          console.log('>>>ERR', {err});
        });
    }
  };
  Alert.alert(
    I18n.t('common.rateUs'),
    I18n.t('common.rateUsDescription'),
    [
      {text: I18n.t('common.rateUsOk'), onPress: openStore},
      {
        text: I18n.t('common.rateUsCancel'),
        onPress: () => {
          callback(false);
        },
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
}

export const callNumber = phone => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};

export function navigateToAppStore() {
  const APP_STORE_LINK = `itms://itunes.apple.com/us/app/apple-store/id${APP_ID.IOS}?mt=8`;
  const PLAY_STORE_LINK = `market://details?id=${APP_ID.ANDROID}`;
  if (Platform.OS === 'ios') {
    Linking.openURL(APP_STORE_LINK).catch(err =>
      console.log('An error occurred', err),
    );
  } else {
    Linking.openURL(PLAY_STORE_LINK).catch(err =>
      console.log('An error occurred', err),
    );
  }
}

export const openAppSetting = () => {
  Linking.openSettings();
};

export const sendMail = email => {
  Linking.openURL(`mailto:${email}`);
};
