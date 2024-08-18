import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import Button from '../../../components/Button/Button';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import PasswordStrength from '../../../components/PasswordStrength/PasswordStrength';
import { addFormData } from '../../../store/formSlice';
import { AppDispatch, RootState } from '../../../store/store';
import convertToBase64 from '../../../utils/base64';
import { CardType } from '../../../utils/types';
import { passwordValidation, schema } from '../../../utils/validation';
import style from './../Forms.module.scss';

type ErrorsType = {
  path: string;
  message: string;
};

export default function FormOne() {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
  const dataForm = watch();

  const countries = useSelector((store: RootState) => store.form.countries);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [, setPasswordErrors] = useState<ErrorsType[]>([]);
  const passwordErrorsArr: ErrorsType[] = [];
  const [strengthValue, setStrengthValue] = useState(0);

  const [createPasswordType, setCreatePasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const displayCreatePassword = (type: string) => {
    if (type === 'password') {
      setCreatePasswordType('text');
    } else {
      setCreatePasswordType('password');
    }
  };

  const displayConfirmPassword = (type: string) => {
    if (type === 'password') {
      setConfirmPasswordType('text');
    } else {
      setConfirmPasswordType('password');
    }
  };

  const handleSubmitForm = async (e?: Event) => {
    e?.preventDefault();

    const formData: CardType = {
      name: dataForm.name,
      age: +dataForm.age,
      email: dataForm.email,
      password: dataForm.password,
      confirmPassword: dataForm.confirmPassword,
      gender: dataForm.gender!,
      terms: dataForm.terms!,
      file: (await convertToBase64(dataForm.file)) as string,
      country: dataForm.country,
      time: new Date().getTime(),
    };

    dispatch(addFormData(formData as CardType));
    navigate('/');
    reset();
  };

  const checkStrength = async (password: string) => {
    const formDataPassword = {
      password: password,
    };

    await passwordValidation
      .validate(formDataPassword, { strict: true, abortEarly: false })
      .then(() => {
        passwordErrorsArr.length = 0;
        if (passwordErrorsArr.length === 0) setStrengthValue(5);
        setPasswordErrors(passwordErrorsArr);
      })
      .catch((error: ValidationError) => {
        error.inner.forEach((err) => {
          passwordErrorsArr.push({ path: err.path as string, message: err.message });
        });
        setPasswordErrors(passwordErrorsArr);

        if (passwordErrorsArr.length === 1) setStrengthValue(4);
        if (passwordErrorsArr.length === 2) setStrengthValue(3);
        if (passwordErrorsArr.length === 3) setStrengthValue(2);
        if (passwordErrorsArr.length === 4) setStrengthValue(1);
        if (passwordErrorsArr.length === 5) setStrengthValue(0);
      });
  };

  return (
    <>
      <h1>Form Two</h1>
      <form
        onSubmit={handleSubmit(() => handleSubmitForm())}
        className={style.form_form}
        noValidate
        autoComplete="off"
      >
        <div className={style.form_inputWrapper}>
          <label htmlFor="name">Name</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Ivan"
            className={style.form_inputField}
          />
          <ErrorMessage errorMsg={errors.name?.message} />
        </div>

        <div className={style.form_inputWrapper}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            {...register('age')}
            id="age"
            placeholder="29"
            min={1}
            max={150}
            className={style.form_inputField}
          />
          <ErrorMessage errorMsg={errors.age?.message} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email')}
            id="email"
            placeholder="example@example.com"
            className={style.form_inputField}
          />
          <ErrorMessage errorMsg={errors.email?.message} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="createPassword">Create password</label>
          <div className={style.form_inputPswrdBtn}>
            <input
              type={createPasswordType}
              {...register('password', {
                onChange: (e) => checkStrength(e.target.value),
              })}
              id="createPassword"
              placeholder="m#P52s@ap$V"
              className={style.form_inputField}
            />
            <button
              onClick={() => displayCreatePassword(createPasswordType)}
              type="button"
              className={style.form_displayPasswordBtn}
            >
              {createPasswordType === 'password' ? 'SHOW' : 'HIDE'}
            </button>
          </div>
          <PasswordStrength value={strengthValue} />
          <ErrorMessage errorMsg={errors.password?.message} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <div className={style.form_inputPswrdBtn}>
            <input
              type={confirmPasswordType}
              {...register('confirmPassword')}
              id="confirmPassword"
              placeholder="m#P52s@ap$V"
              className={style.form_inputField}
            />
            <button
              onClick={() => displayConfirmPassword(confirmPasswordType)}
              type="button"
              className={style.form_displayPasswordBtn}
            >
              {confirmPasswordType === 'password' ? 'SHOW' : 'HIDE'}
            </button>
          </div>
          <ErrorMessage errorMsg={errors.confirmPassword?.message} />
        </div>

        <div className={style.form_inputRadioWrapper}>
          <label htmlFor="gender">Gender</label>
          <div className={style.form_radioBtnField}>
            <div>
              <input type="radio" {...register('gender')} value="male" defaultChecked id="male" />
              Male
            </div>
            <div>
              <input type="radio" {...register('gender')} value="female" id="female" />
              Female
            </div>
          </div>
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="terms">Terms and Conditions agreement</label>
          <div className={style.form_checkboxBtnField}>
            <input type="checkbox" {...register('terms')} id="terms" />I agree with T&C
          </div>
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="file">Upload image</label>
          <div className={style.form_fileBtnField}>
            <input type="file" {...register('file')} id="image" />
          </div>
          <ErrorMessage errorMsg={errors.file?.message} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            {...register('country')}
            id="country"
            placeholder="Russia"
            className={style.form_inputField}
            list="countries"
          />
          <datalist id="countries" className={style.form_datalist}>
            {countries.map((country) => (
              <option key={country} value={country}></option>
            ))}
          </datalist>
          <ErrorMessage errorMsg={errors.country?.message} />
        </div>

        <div className={style.form_buttonsWrapper}>
          <Button name="Submit" type="submit" />
        </div>
      </form>
    </>
  );
}
