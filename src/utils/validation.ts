import { mixed, number, object, ref, string } from 'yup';
import COUNTRIES from './countries';

export const schema = object().shape({
  name: string()
    .required('Name field can not be empty. ')
    .matches(
      /^[A-Z][a-z]{1,30}$/,
      'First letter should be uppercase, others are lowercase. Only latin letters are allowed. ',
    ),

  age: number()
    .required('Age field can not be empty. ')
    .positive('Age should be a number from 1 to 150. ')
    .integer('Age should be a number. '),

  email: string()
    .required('Email is required. ')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email should be valid. '),

  password: string()
    .required('Password is required. ')
    .min(8, 'Password length is 8 characters or more. ')
    .matches(/(?=.*\d).*/, 'Password should contain at least 1 number. ')
    .matches(/(?=.*[A-Z]).*/, 'Password should contain at least 1 uppercased letter. ')
    .matches(/(?=.*[a-z]).*/, 'Password should contain at least 1 lowercased letter. ')
    .matches(/(?=.*\W+).*/, 'Password should contain at least 1 special character. '),

  confirmPassword: string()
    .required('Confirm password is required. ')
    .oneOf([ref('password')], 'Passwords must be equal. '),

  file: mixed<File>()
    .required('Image is required. ')
    .test(
      'type',
      'File type must be .png or .jpeg. ',
      (value) => value.type === 'image/png' || value.type === 'image/jpeg',
    )
    .test('fileSize', 'File size must be less than 1MB. ', (value) => value.size <= 1048576),

  country: string()
    .required('Country field can not be empty. ')
    .test('contain', 'Country name is not valid. Choose it from the list. ', (value) =>
      COUNTRIES.some((country) => value === country),
    ),
});
