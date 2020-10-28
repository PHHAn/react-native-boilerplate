import {Alert} from 'react-native';

export function showAlertConfirm(
  config = {
    title: 'Thông báo',
    message: 'Bạn có đồng ý điều này không!',
    titleOk: 'Có',
    titleCancel: 'Không',
  },
  callback = () => {},
) {
  const {
    message,
    title = 'Thông báo',
    titleOk = 'Có',
    titleCancel = 'Không',
  } = config;
  Alert.alert(
    title,
    message,
    [
      {
        text: titleCancel,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: titleOk,
        onPress: () => {
          callback();
        },
      },
    ],
    {cancelable: false},
  );
}

export function showAlertNotification(
  config = {title: 'Thông báo', message: 'Bạn có đồng ý điều này không!'},
  callback = () => {},
  options = {cancelable: false},
) {
  const {message, title = 'Thông báo'} = config;
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Ok',
        onPress: () => {
          if (typeof callback === 'function') {
            callback();
          }
        },
      },
    ],
    options,
  );
}
