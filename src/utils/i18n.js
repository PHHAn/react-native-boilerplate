import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from '../locales/en';
import vi from '../locales/vi';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  // I18n.locale = locales[0].languageCode;
  I18n.locale = 'vi';
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
};
export const getString = (param, mapObj) => {
  if (mapObj) {
    return I18n.t(param, mapObj);
  }
  return I18n.t(param);
};

export default I18n;
