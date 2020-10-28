# Project Title

Pixa React Native Base Code With React Hooks ([Hooks FAQ](https://reactjs.org/docs/hooks-faq.html))

## Technical

- **Flux architecture**
  - [Redux](https://redux.js.org/docs/introduction/)
- **Routing and navigation**
  - [React Navigation](https://github.com/react-navigation/react-navigation) for native mobile
- **UI Toolkit/s**
  - [Native Base](https://nativebase.io/) for native mobile
- **Connect API**
  - [Axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js
- **Code Linting with**
  - [@react-native-community/eslint-config](https://www.npmjs.com/package/@react-native-community/eslint-config)
- **Localization**
  - [i18n-js](https://github.com/fnando/i18n-js)
  - [react-native-localize](https://github.com/react-native-community/react-native-localize)

## Project scaffolding

```
- android                        # Android native project
- ios                            # Ios native project
- src                            # source code for both platform
  - components                   # Precision components
   - AppText
   - AppLoading
   - AppButton
   - AppTextInput
  - configs                      # contain files for config application
   - appConfigs                  # static constants app (END_POINT,...)
  - helpers                      # contain functions helper logic (handle error from api, permission, saga,...)
  - hooks                        # contain custom hooks
  - scenes                       # Screen
   - auth
      - signIn
         - SignIn.container       # container: handler logic (dispatch action, onChangeValue, etc)
         - SignIn.constants       # constants: static constants (NAMESPACE, ...)
         - SignIn.styles          # styles: static styles
         - SignIn.View            # View: UI/UX
   - main
      - home
         - Home.container
         - Home.constants
         - Home.styles
         - Home.view
  - utils                        # Utility
     - apiUtils                  # Support call api with axios
     - storge                    # hepler get, set, remove AsynceStorge
     - openImagePicker           # Logic and callback open Image Picker
     - navigationServices         # Navigation functions
  - constants
     - appFonts                  # define default font size, family
     - colors                    # define default colors
     - sceneName                 # define scene name
     - size                      # define size
  - loalizations
  - app.js                       # Register model, router, plugins
  - routes                       # Config router
  - services                     # Define API call to back-end and business logic
  - appRedux                        #  This will contain all our redux state management files like actions, reducers,
   store config, saga, etc.
   ## https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
     - actionsType               #
     - actions                   # The only way to mutate the internal state is to dispatch an action.
        - authActions
     - reducers                  #
        - authReducer
        - loadingReducer
        - index                  # combine Reducers
     - saga
        - authSaga
        - index                  # fork all listener
     - selectors                 # compute derived data and used as input.
        - authSelector
     - store                     # A store holds the whole state tree of your application
- babelrc.js
- eslintrc.js
- package.json
- index.js
```

## Alias

- components
- utils
- scenes
- constants
- assets
- appRedux
- helpers
- hooks
- services
- configs

```
Using:
   import AppText from 'components/AppText';
   import {COLOR_PRIMARY} from 'constants/colors';
```

## 🚀 Getting Started

### 1. Installation

```bash
$ yarn install
$ cd ios # To build iOS app
$ pod install
$ cd ..
```

### 2. Run android

```sh
$ react-native run-android
```

### 3. Run iOS

```sh
$ react-native run-ios
```

### 4. Generator Module

```
# Install plop
yarn global add plop

# Generate new module
plop module <module_name>

```

## Coding convention

- React component: https://github.com/airbnb/javascript/tree/master/react
- Folder name in **scenes**: camelCase ("userDetail")
- Folder name in **components**: PascalCase ("SiderMenu")

# How to create a new module:

```
plop module <nameModule>
```

## Lib extends Default

- moment
- lodash
- reselect
- react-native-vector-icons
- native-base (UI kit)
- @react-native-community/async-storage
- react-native-image-picker
- react-native-dotenv
- redux-persist
- @react-native-community/hooks

<!--
### Note

- iOS: Do not use the `$ react-native link` command to add fonts for iOS, because there will be problems and cannot build iOS
- Android: `OK`

  <!-- ==== COMING SOON ====
  - react-native-linear-gradient
- react-native-firebase
- react-native-permissions

-->
