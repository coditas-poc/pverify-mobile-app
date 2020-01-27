import * as Yup from 'yup';

const validEmail = 'Please enter valid email address';
const emailReq = 'Email address is required';
const nameReq = 'Please enter valid Name';
const passwordRequired = 'Password is required';
const comparePassword =
  'Password length must be greater than 8 and less than 20';

const confirmPasswordRequired = 'Confirm password is required';

const passwordMatch = 'Password must match';

const dobReq = 'Please select valid date';
const genderReq = 'Please select valid gender';
const providerReq = 'Please select valid provider';
const memberIdReq = 'Please enter valid Member Id';
const termsReq = 'Please Accept All Terms';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(validEmail)
    .required(emailReq),
  password: Yup.string()
    .required(passwordRequired)
    .matches(/^[a-zA-Z0-9\W]{8,20}$/, comparePassword),
});

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email(validEmail)
    .required(emailReq),
  password: Yup.string()
    .required(passwordRequired)
    .matches(/^[a-zA-Z0-9\W]{8,20}$/, comparePassword),
  confirmPassword: Yup.string()
    .required(confirmPasswordRequired)
    .matches(/^[a-zA-Z0-9\W]{8,20}$/, comparePassword)
    .oneOf([Yup.ref('password'), null], passwordMatch),
});

export const ProfileConfirmSchema = Yup.object().shape({
  name: Yup.string()
    .required(nameReq),
  dob: Yup.string()
    .notOneOf(['Select Date'], dobReq)
    .required(),
  sex: Yup.string()
    .required()
    .notOneOf(['select gender'], genderReq),
  provider: Yup.string()
    .required()
    .notOneOf(['select provider'], providerReq),
  memberId: Yup.string()
    .required(memberIdReq),
  condition1: Yup.boolean()
    .notOneOf([false], termsReq)
    .required(termsReq),
  condition2: Yup.boolean()
    .notOneOf([false], termsReq)
    .required(termsReq),
});
