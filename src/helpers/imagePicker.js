import {Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {
  checkMultiple,
  PERMISSIONS,
  request,
  RESULTS,
  check,
} from 'react-native-permissions';
import {TYPE_IMG_PICKER} from 'constants/appConstants';

const optionCameraCaptured = {
  mediaType: 'photo',
  maxWidth: 1000,
  maxHeight: 1000,
  quality: 0.7,
  includeBase64: true,
  saveToPhotos: true,
};

const checkAndroidPermissions = async () => {
  const storagePermission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
  const cameraPermission = PERMISSIONS.ANDROID.CAMERA;
  const res = await checkMultiple([storagePermission, cameraPermission]);
  if (
    res[storagePermission] === RESULTS.GRANTED &&
    res[cameraPermission] === RESULTS.GRANTED
  ) {
    return true;
  } else {
    let isAvailable = false;
    if (res[storagePermission] === RESULTS.DENIED) {
      const requestResult = await request(storagePermission);
      if (requestResult !== RESULTS.GRANTED) {
        isAvailable = false;
      } else {
        isAvailable = true;
      }
    }
    if (res[storagePermission] === RESULTS.BLOCKED) {
      isAvailable = false;
    }
    if (res[storagePermission] === RESULTS.UNAVAILABLE) {
      isAvailable = false;
    }

    if (res[cameraPermission] === RESULTS.DENIED) {
      const requestResult = await request(cameraPermission);
      if (requestResult !== RESULTS.GRANTED) {
        isAvailable = false;
      } else {
        isAvailable = true;
      }
    }
    if (res[cameraPermission] === RESULTS.BLOCKED) {
      isAvailable = false;
    }
    if (res[cameraPermission] === RESULTS.UNAVAILABLE) {
      isAvailable = false;
    }
    return isAvailable;
  }
};

const checkIOSPermissions = async () => {
  const cameraPermission = PERMISSIONS.IOS.CAMERA;
  const res = await check(cameraPermission);
  if (res === RESULTS.GRANTED) {
    return true;
  } else {
    let isAvailable = false;
    if (res === RESULTS.DENIED) {
      const requestResult = await request(cameraPermission);
      if (requestResult !== RESULTS.GRANTED) {
        isAvailable = false;
      } else {
        isAvailable = true;
      }
    }
    if (res === RESULTS.BLOCKED) {
      isAvailable = false;
    }
    if (res === RESULTS.UNAVAILABLE) {
      isAvailable = false;
    }
  }
};

const handledCameraCaptured = async (customOptions, callback) => {
  if (Platform.OS === 'android') {
    const checkSavePermissionResult = await checkAndroidPermissions();
    if (!checkSavePermissionResult) {
      return callback(
        {
          title: 'No Permission!',
          message:
            'Please grant Certifired app permission to access device camera to continue use this feature',
        },
        null,
      );
    }
  } else {
    const checkSavePermissionResult = await checkIOSPermissions();
    if (!checkSavePermissionResult) {
      return callback(
        {
          title: 'No Permission!',
          message:
            'Please grant Certifired app permission to access device camera to continue use this feature',
        },
        null,
      );
    }
  }
  const options = Object.assign(
    {},
    optionCameraCaptured,
    customOptions ? {...customOptions} : {},
  );
  launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      callback(
        {title: response.errorCode, message: response.errorMessage},
        null,
      );
    } else {
      callback(null, response);
    }
  });
};

const optionImageLibrary = {
  mediaType: 'photo',
  compressImageMaxWidth: 1000,
  compressImageMaxHeight: 1000,
  compressImageQuality: 0.7,
  includeBase64: true,
};

const handledImageLibrary = (customOptions, callback) => {
  const options = Object.assign(
    {},
    optionImageLibrary,
    customOptions ? {...customOptions} : {},
  );
  // launchImageLibrary(options, (response) => {
  //   if (response.didCancel) {
  //     console.log('User cancelled image picker')
  //   } else if (response.errorCode) {
  //     callback(
  //       { title: response.errorCode, message: response.errorMessage },
  //       null,
  //     )
  //   } else {
  //     callback(null, response)
  //   }
  // })
  ImagePicker.openPicker(options)
    .then((res) => {
      let parse;
      if (options.multiple) {
        parse = res.map((i) => ({
          uri: i.path,
          base64: i.data,
          height: i.height,
          width: i.width,
          type: i.mime,
          fileName: i.filename,
          fileSize: i.size,
        }));
      } else {
        parse = {
          uri: res.path,
          base64: res.data,
          height: res.height,
          width: res.width,
          type: res.mime,
          fileName: res.filename,
          fileSize: res.size,
        };
      }
      callback(null, parse);
    })
    .catch((err) => callback(err, null));
};

export const openImagePicker = async ({
  type,
  callback,
  options = {saveToPhotos: true, multiple: false},
}) => {
  switch (type) {
    case TYPE_IMG_PICKER.CAMERA:
      handledCameraCaptured(options, callback);
      break;
    case TYPE_IMG_PICKER.LIBRARY:
      handledImageLibrary(options, callback);
      break;
    default:
      throw 'Please picker picker type';
  }
};
