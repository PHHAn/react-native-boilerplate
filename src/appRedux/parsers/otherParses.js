import _ from 'lodash';

export const parseDataVersionApp = data => {
    if (_.isObject(data)) {
      const {
        number_version_ios: ios,
        number_version_android: android,
      } = data;
      return {ios, android};
    }
    return {};
  };
