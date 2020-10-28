import {scalePortrait} from 'utils/responsive';

// prefix font Family
const DEFAULT_PREFIX_FONT_FAMILY = 'TrebuchetMS';

// // array contain type fontFamily
// const ARRAY_INIT_FONT_CONST = ['REGULAR', 'BOLD', 'LIGHT', 'MEDIUM'];

// // init defind
// let FONT_FAMILY = {};

// // map data
// ARRAY_INIT_FONT_CONST.map(key => {
//   FONT_FAMILY = Object.assign({}, FONT_FAMILY, {
//     [`${key}`]: `${DEFAULT_PREFIX_FONT_FAMILY}${key}`,
//   });
// });

// size constants
export const FONT_SIZE_CONST = {
  SMALL: 'SMALL',
  NORMAL: 'NORMAL',
  FIT: 'FIT',
  LARGE: 'LARGE',
};

// fontsize
export const FONT_SIZE = {
  SMALL: scalePortrait(12),
  NORMAL: scalePortrait(14),
  FIT: scalePortrait(16),
  LARGE: scalePortrait(18),
  X_LARGE: scalePortrait(24),
};

// ICON_SIZE
export const ICON_SIZE = {
  SMALL: scalePortrait(16),
  NORMAL: scalePortrait(24),
  FIT: scalePortrait(26),
  LARGE: scalePortrait(30),
  X_LARGE: scalePortrait(36),
};
// fontFamily
export const FONT_FAMILY = {
  REGULAR: `${DEFAULT_PREFIX_FONT_FAMILY}`,
  BOLD: `${DEFAULT_PREFIX_FONT_FAMILY}-Bold`,
  LIGHT: `${DEFAULT_PREFIX_FONT_FAMILY}`,
  MEDIUM: `${DEFAULT_PREFIX_FONT_FAMILY}`,
};

export default {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_SIZE_CONST,
  ICON_SIZE,
};
