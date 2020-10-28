import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './SignIn.styles';
import SCENE_NAMES from '../../../constants/sceneName';
import NavigationServices from '../../../utils/navigationServices';
import {Content} from 'native-base';
import AppButton from 'components/AppButton';
import {SIGNIN_FORM_SCHEME} from './SignIn.constants';
import I18n from 'utils/i18n';
import TextInputBox from 'components/TextInputBox';
import {Formik} from 'formik';
import AppText from 'components/AppText';
import AppContainer from 'components/AppContainer';

function SignInView(props) {
  const {
    onPressSignIn,
    onPressSubmit,
    showPassword,
    onPressNavForgotPassword,
    onPressRightIcon,
  } = props;
  return (
    <AppContainer style={styles.container}>
      <Content>
        <Formik
          initialValues={{phoneOrEmail: '', password: ''}}
          onSubmit={onPressSubmit}
          validationSchema={SIGNIN_FORM_SCHEME}>
          {({handleChange, values, touched, errors, handleSubmit}) => (
            <React.Fragment>
              <TextInputBox
                placeholder={I18n.t('textInput.hintPhoneOrEmail', '')}
                containerStyle={styles.specialMargin}
                error={touched.phoneOrEmail && errors.phoneOrEmail}
                messageError={errors.phoneOrEmail}
                onChangeText={handleChange('phoneOrEmail')}
                autoCapitalize="none"
                value={values.phoneOrEmail}
                notUnderLine
                keyboardType="email-address"
              />
              <TextInputBox
                placeholder={I18n.t('textInput.hintPassword', '')}
                error={touched.password && errors.password}
                messageError={errors.password}
                onChangeText={handleChange('password')}
                secureTextEntry={showPassword ? false : true}
                value={values.password}
                notUnderLine
                rightIcon={showPassword ? 'eye-outline' : 'eye-off-outline'}
                onPressRightIcon={onPressRightIcon}
              />
              <TouchableOpacity
                onPress={onPressNavForgotPassword}
                style={styles.forgotPassButton}>
                <AppText style={styles.textForgotPassword}>
                  {I18n.t('button.forgotPassword')}
                </AppText>
              </TouchableOpacity>
              <AppButton
                style={styles.btnLogin}
                title={I18n.t('button.signIn')}
                onPress={handleSubmit}
              />
            </React.Fragment>
          )}
        </Formik>
        <AppButton
          style={styles.btnLogin}
          title={'Goto Home'}
          onPress={() => {
            NavigationServices.resetActionTo(SCENE_NAMES.MAIN);
          }}
        />

        <AppButton
          style={styles.btnLogin}
          title={'Test Api'}
          onPress={onPressSignIn}
        />
        <AppButton
          style={styles.btnLogin}
          title={'Goto Dummy'}
          onPress={() => {
            NavigationServices.navigate(SCENE_NAMES.DUMMY);
          }}
        />
      </Content>
    </AppContainer>
  );
}

export default SignInView;
