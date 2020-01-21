import * as Yup from 'yup';

const validEmail = 'Please enter valid email address';
const emailReq = 'Email address is required';
const passwordRequired = 'Password is required';
const comparePassword =
  'Password length must be greater than 8 and less than 20';

const confirmPasswordRequired = 'Confirm password is required';

const passwordMatch = 'Password must match';

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
