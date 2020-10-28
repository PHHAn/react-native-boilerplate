import utils from 'utils/apiUtils';
import AppConfigs from 'configs/appConfigs';

const END_POINT = AppConfigs.END_POINT;

export const signInApi = () => {
  return utils.get(`${END_POINT}/get-version-app1`);
};

export const getUserInfoApi = () => {
  return utils.get(`${END_POINT}/get-version-app`);
};
