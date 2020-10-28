import _ from 'lodash';

export const parseUserInfo = obj => {
  if (_.isObject(obj)) {
    return obj;
  }
  return {};
};
