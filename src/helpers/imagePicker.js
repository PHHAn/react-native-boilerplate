import ImagePicker from 'react-native-image-picker';
import I18n from 'utils/i18n';
import ImageResizer from 'react-native-image-resizer';
import {showAlertNotification} from 'utils/alert';

export const optionsImagePicker = {
  title: I18n.t('openPicker.defaultTitle'),
  takePhotoButtonTitle: I18n.t('openPicker.takePhotoButtonTitle'),
  chooseFromLibraryButtonTitle: I18n.t(
    'openPicker.chooseFromLibraryButtonTitle',
  ),
  quality: 1,
  maxWidth: 1200,
  maxHeight: 1200,
  fixOrientation: true,
  noData: true,
  mediaType: 'photo',
  cameraType: 'back',
  // storageOptions: {
  //   skipBackup: true,
  //   path: 'images',
  // },
};

export const openImagePicker = (customOptions, callback) => {
  const options = Object.assign(
    {},
    optionsImagePicker,
    customOptions ? {...customOptions} : {},
  );
  ImagePicker.showImagePicker(options, response => {
    console.log('response::', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      callback(response.error, null);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      console.log('takePhoto>>>>', response);
      callback(null, response);
    }
  });
};

const resizeImage = async (image, callback) => {
  const limitWidth = 800;
  const limitHeight = 600;
  let width;
  let height;
  if (image.width > image.height) {
    width = image.width < limitWidth ? image.width : limitWidth;
    height =
      image.width >= limitWidth
        ? (image.width / limitWidth) * image.height
        : image.height;
  } else {
    height = image.height < limitHeight ? image.height : limitHeight;
    width =
      image.height >= limitHeight
        ? (image.height / limitHeight) * image.width
        : image.height;
  }
  try {
    const resizeImg = await ImageResizer.createResizedImage(
      image.uri,
      parseInt(width),
      parseInt(height),
      'JPEG',
      75,
    );
    if (resizeImg.size && resizeImg.size > 3000000) {
      return showAlertNotification({
        message: I18n.t('openPicker.overSize'),
      });
    }
    const imgResized = {
      ...resizeImg,
      type: image.type,
    };
    callback(null, imgResized);
  } catch (err) {
    console.log(err);
    callback(err, null);
  }
};

export const openImagePickerAndResize = async callback => {
  openImagePicker({}, (err, response) => {
    if (!err) {
      resizeImage(response, callback);
    } else {
      callback(err, null);
    }
  });
};
