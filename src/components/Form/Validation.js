import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('This field is required'),
  phone: Yup.string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required'),
  email: Yup.string()
    .email('Email must be valid email')
    .required('This field is required'),
  address: Yup.string()
    .min(8, 'Address must be at least 8 characters')
    .max(22, 'Address must be no longer than 22 characters')
    .required('This field is required'),
});
