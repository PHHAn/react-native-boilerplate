import {END_POINT} from 'react-native-dotenv';

export const ENV_KEY = {
  PRODUCTION: 'PRODUCTION',
  DEVELOP: 'DEVELOPMENT',
};

const AppConfigs = {
  DEVELOPMENT: {
    ENV_KEY: ENV_KEY.DEVELOP,
    END_POINT,
  },
  PRODUCTION: {
    ENV_KEY: ENV_KEY.PRODUCTION,
    END_POINT,
  },
};

export default AppConfigs.DEVELOPMENT;
