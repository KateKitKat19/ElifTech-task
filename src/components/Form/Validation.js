import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nameRegExp =
  /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/;

export const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('This field is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number must be valid')
    .required('This field is required'),
  email: Yup.string()
    .email('Email must be valid email')
    .required('This field is required'),
  address: Yup.string()
    .min(8, 'Address must be at least 8 characters')
    .max(22, 'Address must be no longer than 22 characters')
    .required('This field is required'),
});
