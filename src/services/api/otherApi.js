// import utils from 'utils/apiUtils';
// import AppConfigs from 'configs/appConfigs';

// const END_POINT = AppConfigs.END_POINT;

export const getAppVersionForceUpdateApi = async () => {
  // return utils.get(`${END_POINT}/get-version-app`);
  return {number_version_ios: '1.0.0', number_version_android: '1.0.0'};
};
