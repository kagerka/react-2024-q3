import { boolean, mixed, number, object, ref, string } from 'yup';
import COUNTRIES from './countries';

export const schema = object().shape({
  name: string()
    .required('Name is required. ')
    .matches(
      /^[A-Z][a-z]{1,30}$/,
      'First letter should be uppercase, others are lowercase. Only latin letters are allowed. ',
    ),

  age: number()
    .required('Age is required. ')
    .positive('Age should be a positive number. ')
    .integer('Age should be a number. ')
    .typeError('Age is required. '),

  email: string()
    .required('Email is required. ')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email should be valid. '),

  password: string()
    .required('Password is required. ')
    .matches(/(?=.*\d).*/, 'Add a number. ')
    .matches(/(?=.*[A-Z]).*/, 'Add an uppercased letter. ')
    .matches(/(?=.*[a-z]).*/, 'Add a lowercased letter. ')
    .matches(/(?=.*\W+).*/, 'Add a special character. '),

  confirmPassword: string()
    .required('Confirm password is required. ')
    .oneOf([ref('password')], 'Passwords must be equal. '),

  file: mixed<FileList>()
    .required('Image is required. ')
    .test(
      'type',
      'File type must be .png or .jpeg. ',
      (value) => value[0]?.type === 'image/png' || value[0]?.type === 'image/jpeg',
    )
    .test('fileSize', 'File size must be less than 1MB. ', (value) => value[0]?.size <= 1048576),

  country: string()
    .required('Country is required. ')
    .test('contain', 'Country name is not valid. Choose it from the list. ', (value) =>
      COUNTRIES.some((country) => value === country),
    ),
  gender: string(),
  terms: boolean(),
});

export const passwordValidation = object().shape({
  password: string()
    .matches(/(?=.*\d).*/, 'Password should contain at least 1 number. ')
    .matches(/(?=.*[A-Z]).*/, 'Password should contain at least 1 uppercased letter. ')
    .matches(/(?=.*[a-z]).*/, 'Password should contain at least 1 lowercased letter. ')
    .matches(/(?=.*\W+).*/, 'Password should contain at least 1 special character. ')
    .min(8, 'Strong password should consist of at least 8 characters. '),
});
