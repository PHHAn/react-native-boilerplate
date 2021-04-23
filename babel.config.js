const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      constants: './src/constants/',
      routers: './src/routers/',
      scenes: './src/scenes/',
      utils: './src/utils/',
      appRedux: './src/appRedux/',
      helpers: './src/helpers/',
      hooks: './src/hooks/',
      services: './src/services/',
      configs: './src/configs/',
      components: './src/components/',
      assets: './src/assets/',
      model: './src/model/',
    },
  },
]);

plugins.push([
  'module:react-native-dotenv',
  {
    moduleName: '@env',
    path: '.env',
    blacklist: null,
    whitelist: null,
    safe: false,
    allowUndefined: true,
  },
]);

module.exports = {
  presets,
  // plugins,
  env: {
    production: {
      plugins: plugins.concat('transform-remove-console'),
    },
    development: {
      plugins: plugins,
    },
  },
};
