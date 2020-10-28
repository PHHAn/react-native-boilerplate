export const NAMESPACE = 'scenes.auth.signIn';
import * as Yup from 'yup';
import I18n from 'utils/i18n';

export const SIGNIN_FORM_SCHEME = Yup.object().shape({
  phoneOrEmail: Yup.string()
    // .min(9, `${I18n.t('common.phone')} ${I18n.t('validation.string.invalid')}`)
    // .max(10, `${I18n.t('common.phone')} ${I18n.t('validation.string.invalid')}`)
    .matches(
      /^[0][0-9]{9,9}\b|^[1-9][0-9]{8,8}\b|^[a-z][a-z0-9]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
      `${I18n.t('common.phoneOrEmail')} ${I18n.t('validation.string.invalid')}`,
    )
    .required(
      `${I18n.t('common.phoneOrEmail')} ${I18n.t(
        'validation.string.required',
      )}`,
    ),
  password: Yup.string()
    .min(
      6,
      `${I18n.t('common.password')} ${I18n.t(
        'validation.string.min',
      )} 6 ${I18n.t('validation.string.character')}`,
    )
    .required(
      `${I18n.t('common.password')} ${I18n.t('validation.string.required')}`,
    ),
});
