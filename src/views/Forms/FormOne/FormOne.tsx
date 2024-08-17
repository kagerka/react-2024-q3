import { FormEvent, useRef, useState } from 'react';
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
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const createPasswordInput = useRef<HTMLInputElement>(null);
  const confirmPasswordInput = useRef<HTMLInputElement>(null);
  const genderMaleInput = useRef<HTMLInputElement>(null);
  const genderFemaleInput = useRef<HTMLInputElement>(null);
  const acceptTermsInput = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const countryInput = useRef<HTMLInputElement>(null);

  const countries = useSelector((store: RootState) => store.form.countries);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState<ErrorsType[]>([]);
  const newErrors: ErrorsType[] = [];

  const [, setPasswordErrors] = useState<ErrorsType[]>([]);
  const passwordErrorsArr: ErrorsType[] = [];

  const [createPswrdType, setCreatePswrdType] = useState('password');
  const [confirmPswrdType, setConfirmPswrdType] = useState('password');

  const [strengthValue, setStrengthValue] = useState(0);

  const displayCreatePassword = (type: string) => {
    if (type === 'password') {
      setCreatePswrdType('text');
    } else {
      setCreatePswrdType('password');
    }
  };

  const displayConfirmPassword = (type: string) => {
    if (type === 'password') {
      setConfirmPswrdType('text');
    } else {
      setConfirmPswrdType('password');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      name: nameInput.current?.value ?? '',
      age: Number(ageInput.current?.value ?? 0),
      email: emailInput.current?.value ?? '',
      password: createPasswordInput.current?.value ?? '',
      confirmPassword: confirmPasswordInput.current?.value ?? '',
      gender: genderMaleInput.current?.checked
        ? genderMaleInput.current.value
        : (genderFemaleInput.current?.value ?? ''),
      terms: acceptTermsInput.current?.checked ?? false,
      file: fileInput.current?.files?.[0] ?? '',
      country: countryInput.current?.value ?? '',
      time: new Date().getTime() ?? '',
    };

    schema
      .validate(formData, { strict: true, abortEarly: false })
      .then(async () => {
        formData.file = (await convertToBase64(fileInput.current?.files?.[0] as File)) as string;
        dispatch(addFormData(formData as CardType));
        navigate('/');
      })
      .catch((error: ValidationError) => {
        error.inner.forEach((err) => {
          newErrors.push({ path: err.path as string, message: err.message });
        });
        setErrors(newErrors);
      });
  };

  const getErrorMsg = (id: string) => {
    return errors.map((err) => (err.path === id ? err.message : ''));
  };

  const handleChange = async () => {
    const formData = {
      password: createPasswordInput.current?.value ?? '',
    };

    await passwordValidation
      .validate(formData, { strict: true, abortEarly: false })
      .then(() => {
        passwordErrorsArr.length = 0;
        if (passwordErrorsArr.length === 0) setStrengthValue(5);
        setPasswordErrors(passwordErrorsArr);
      })
      .catch((error: ValidationError) => {
        error.inner.forEach((err) =>
          passwordErrorsArr.push({ path: err.path as string, message: err.message }),
        );
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
      <h1>Form One</h1>
      <form onSubmit={handleSubmit} className={style.form_form} noValidate autoComplete="off">
        <div className={style.form_inputWrapper}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameInput}
            placeholder="Ivan"
            className={style.form_inputField}
          />
          <ErrorMessage errorMsg={getErrorMsg('name')} />
        </div>

        <div className={style.form_inputWrapper}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            ref={ageInput}
            placeholder="29"
            min={1}
            max={150}
            className={style.form_inputField}
          />
          <ErrorMessage errorMsg={getErrorMsg('age')} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailInput}
            placeholder="example@example.com"
            className={style.form_inputField}
          />
          <ErrorMessage errorMsg={getErrorMsg('email')} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="create-password">Create password</label>
          <div className={style.form_inputPswrdBtn}>
            <input
              type={createPswrdType}
              name="create-password"
              id="create-password"
              ref={createPasswordInput}
              placeholder="m#P52s@ap$V"
              className={style.form_inputField}
              onChange={handleChange}
            />
            <button
              onClick={() => displayCreatePassword(createPswrdType)}
              type="button"
              className={style.form_displayPasswordBtn}
            >
              {createPswrdType === 'password' ? 'SHOW' : 'HIDE'}
            </button>
          </div>
          <PasswordStrength value={strengthValue} />
          <ErrorMessage errorMsg={getErrorMsg('password')} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="confirm-password">Confirm password</label>
          <div className={style.form_inputPswrdBtn}>
            <input
              type={confirmPswrdType}
              name="confirm-password"
              id="confirm-password"
              ref={confirmPasswordInput}
              placeholder="m#P52s@ap$V"
              className={style.form_inputField}
            />
            <button
              onClick={() => displayConfirmPassword(confirmPswrdType)}
              type="button"
              className={style.form_displayPasswordBtn}
            >
              {confirmPswrdType === 'password' ? 'SHOW' : 'HIDE'}
            </button>
          </div>
          <ErrorMessage errorMsg={getErrorMsg('confirmPassword')} />
        </div>

        <div className={style.form_inputRadioWrapper}>
          <label htmlFor="gender">Gender</label>
          <div className={style.form_radioBtnField}>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked
                id="male"
                ref={genderMaleInput}
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                ref={genderFemaleInput}
              />
              Female
            </div>
          </div>
          <ErrorMessage errorMsg={getErrorMsg('gender')} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="terms">Terms and Conditions agreement</label>
          <div className={style.form_checkboxBtnField}>
            <input type="checkbox" name="terms" id="terms" ref={acceptTermsInput} />I agree with T&C
          </div>
          <ErrorMessage errorMsg={getErrorMsg('terms')} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="image">Upload image</label>
          <div className={style.form_fileBtnField}>
            <input type="file" name="image" id="image" ref={fileInput} />
          </div>
          <ErrorMessage errorMsg={getErrorMsg('file')} />
        </div>
        <div className={style.form_inputWrapper}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            ref={countryInput}
            placeholder="Russia"
            className={style.form_inputField}
            list="countries"
          />
          <datalist id="countries" className={style.form_datalist}>
            {countries.map((country) => (
              <option key={country} value={country}></option>
            ))}
          </datalist>
          <ErrorMessage errorMsg={getErrorMsg('country')} />
        </div>

        <div className={style.form_buttonsWrapper}>
          <Button name="Submit" type="submit" />
        </div>
      </form>
    </>
  );
}
