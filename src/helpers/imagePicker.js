import { TYPE_IMG_PICKER } from 'Constants/Common';
import { Platform } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { checkMultiple, PERMISSIONS, request, RESULTS, check } from 'react-native-permissions';

const optionCameraCaptured = {
  mediaType: 'photo',
  // maxWidth: 1000,
  // maxHeight: 1000,
  quality: 0.7,
  includeBase64: true,
  saveToPhotos: true,
};

const cameraPermissionDenied =
  'Please provided Certifired permission to access to device camera to use all Certifired features such as Scan QR, take photo avatar,...';
const cameraPermissionBlocked =
  'Please provided Certifired permission to access to device camera to use all Certifired features such as Scan QR, take photo avatar,...';
const cameraPermissionNotAvailbled = 'This feature is not availble on this device!';

const storagePermissionDenied =
  'Please provided Certifired permission to access to device storage to save captured image into device public storage';
const storagePermissionBlocked =
  'Please provided Certifired permission to access to device storage to save captured image into device public storage';
const storagePermissionNotAvailbled = 'This feature is not availble on this device!';

const checkAndroidPermissions = async () => {
  const storagePermission = PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
  const cameraPermission = PERMISSIONS.ANDROID.CAMERA;
  const res = await checkMultiple([storagePermission, cameraPermission]);
  if (res[storagePermission] === RESULTS.GRANTED && res[cameraPermission] === RESULTS.GRANTED) {
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
        null
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
        null
      );
    }
  }
  const options = Object.assign(
    {},
    optionCameraCaptured,
    customOptions ? { ...customOptions } : {}
  );
  launchCamera(options, ({ assets, errorCode, errorMessage, didCancel }) => {
    if (didCancel) {
      console.log('User cancelled image picker');
    } else if (errorCode) {
      callback({ title: errorCode, message: errorMessage }, null);
    } else {
      console.log('>>>CHECK RES<<<', assets);

      callback(null, assets[0]);
    }
  });
};

const optionImageLibrary = {
  mediaType: 'photo',
  // maxWidth: 1000,
  // maxHeight: 1000,
  quality: 0.7,
  includeBase64: true,
};

const handledImageLibrary = (customOptions, callback) => {
  const options = Object.assign({}, optionImageLibrary, customOptions ? { ...customOptions } : {});
  launchImageLibrary(options, ({ assets, errorCode, errorMessage, didCancel }) => {
    if (didCancel) {
      console.log('User cancelled image picker');
    } else if (errorCode) {
      callback({ title: errorCode, message: errorMessage }, null);
    } else {
      console.log('>>>CHECK RES<<<', assets);
      if (!options.selectionLimit || assets.length === 1) {
        callback(null, assets[0]);
      } else {
        callback(null, assets);
      }
    }
  });
};

export const openImagePicker = async ({ type, callback, options = { saveToPhotos: true } }) => {
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
