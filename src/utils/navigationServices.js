import {StackActions, CommonActions} from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(name, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}

function reset(resetAction) {
  _navigator.dispatch(resetAction);
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

export function getParams(props) {
  return props.route.params || {};
}

export function resetActionTo(screen) {
  const resetAction = CommonActions.reset({
    index: 1,
    routes: [{name: screen}],
  });
  _navigator.dispatch(resetAction);
}

export function replace(name, params) {
  _navigator.dispatch(StackActions.replace(name, params));
}

// add other navigation functions that you need and export them
const NavigationServices = {
  navigate,
  goBack,
  reset,
  setTopLevelNavigator,
  resetActionTo,
  replace,
};
export default NavigationServices;
