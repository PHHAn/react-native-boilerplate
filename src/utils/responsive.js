import {Dimensions, PixelRatio} from 'react-native';

import {isTablet} from 'react-native-device-info';
import {initialWindowSafeAreaInsets as initialWindowSafe} from 'react-native-safe-area-context';
const initialWindowSafeAreaInsets = initialWindowSafe || {top: 0, left: 0, bottom: 0, right: 0};

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidthPortrait = 375;
const guidelineBaseWidthLandscape = 667;
const guidelineBaseWidthLandscapeTablet = 960;
const guidelineBaseWidthPortraitTablet = 773;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthLandscape = windowWidth > windowHeight ? windowWidth : windowHeight;
const widthPortrait = windowWidth < windowHeight ? windowWidth : windowHeight;

export function isPortrait() {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
}

export const scalePortrait = (sizePhone, sizeTablet) => {
  const safeAreaWidthPadding =
    initialWindowSafeAreaInsets.left + initialWindowSafeAreaInsets.right;

  const usableWidth = widthPortrait - safeAreaWidthPadding;

  if (isTablet() && sizeTablet) {
    return Math.round(
      PixelRatio.roundToNearestPixel(
        (usableWidth / guidelineBaseWidthPortraitTablet) *
          (sizeTablet || sizePhone),
      ),
    );
  }
  return Math.round(
    PixelRatio.roundToNearestPixel(
      (usableWidth / guidelineBaseWidthPortrait) * sizePhone,
    ),
  );
};

export const scaleLandscape = (sizeMobile, sizeTablet) => {
  const safeAreaWidthPadding =
    initialWindowSafeAreaInsets.top + initialWindowSafeAreaInsets.bottom;
  const usableWidth = widthLandscape - safeAreaWidthPadding;
  if (isTablet() && sizeTablet) {
    return Math.round(
      PixelRatio.roundToNearestPixel(
        (usableWidth / guidelineBaseWidthLandscapeTablet) *
          (sizeTablet || sizeMobile),
      ),
    );
  }
  const normalizeSize =
    (usableWidth / guidelineBaseWidthLandscape) * sizeMobile;
  return Math.round(PixelRatio.roundToNearestPixel(normalizeSize));
};

// Just only use inline style
export const scale = (sizeMobile, sizeTablet) => {
  const {top, bottom, left, right} = initialWindowSafeAreaInsets;
  const safeAreaWidthPadding = !isPortrait() ? top + bottom : left + right;
  const dimension = Dimensions.get('window');
  const {width} = dimension;
  const usableWidth = width - safeAreaWidthPadding;
  const baseWidth = isPortrait()
    ? guidelineBaseWidthPortrait
    : guidelineBaseWidthLandscape;
  const inputSize =
    isTablet() && sizeTablet ? sizeTablet || sizeMobile : sizeMobile;
  const normalizeSize = (usableWidth / baseWidth) * inputSize;
  return Math.round(PixelRatio.roundToNearestPixel(normalizeSize));
};
