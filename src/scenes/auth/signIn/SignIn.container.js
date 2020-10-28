import React, {useLayoutEffect, useCallback, useState} from 'react';
import SignInView from './SignIn.view';
import {useActions} from 'hooks/useActions';
import {signInSubmit, getUserInfoSubmit} from 'appRedux/actions/authActions';
import useSelectorShallow, {
  selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {AUTH} from 'appRedux/actionsType';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './SignIn.constants';
import I18n from 'utils/i18n';

export default function SignInContainer({navigation}) {
  const actions = useActions({signInSubmit, getUserInfoSubmit});
  const isFetchingTest = useSelectorShallow(
    selectorWithProps(getIsFetchingByActionsTypeSelector, [
      AUTH.GET_USER_INFO.HANDLER,
    ]),
  );
  const [showPassword, setShowPassword] = useState(false);
  console.log('>>>>isFetchingTest', {isFetchingTest});
  const onPressRightIcon = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: I18n.t(`${NAMESPACE}.title`),
    });
  }, [navigation]);
  return (
    <SignInView
      isLoading={isFetchingTest}
      showPassword={showPassword}
      onPressRightIcon={onPressRightIcon}
      onPressSignIn={actions.signInSubmit}
    />
  );
}
