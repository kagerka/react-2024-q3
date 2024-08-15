import { FormEvent, useState } from 'react';

import Button from '../Button/Button';
import style from './Form.module.scss';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | string>('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [country, setCountry] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      name,
      age,
      email,
      createPassword,
      confirmPassword,
      gender,
      acceptTerms,
      image,
      country,
    );
  };

  return (
    <form onSubmit={handleSubmit} className={style.form_form}>
      <div className={style.form_inputWrapper}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
          placeholder="Ivan"
          className={style.form_inputField}
        />
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge((e.target as HTMLInputElement).value)}
          placeholder="29"
          min={1}
          max={150}
          className={style.form_inputField}
        />
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="example@example.com"
          className={style.form_inputField}
        />
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="create-password">Create password</label>
        <input
          type="password"
          name="create-password"
          id="create-password"
          value={createPassword}
          onChange={(e) => setCreatePassword((e.target as HTMLInputElement).value)}
          placeholder="m#P52s@ap$V"
          className={style.form_inputField}
        />
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
          placeholder="m#P52s@ap$V"
          className={style.form_inputField}
        />
      </div>
      <div className={style.form_inputRadioWrapper}>
        <label htmlFor="gender">Gender</label>
        <div className={style.form_radioBtnField}>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={gender === 'male'}
              onChange={(e) => setGender((e.target as HTMLInputElement).value)}
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              checked={gender === 'female'}
              onChange={(e) => setGender((e.target as HTMLInputElement).value)}
            />
            Female
          </div>
        </div>
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="terms">Terms and Conditions agreement</label>
        <div className={style.form_checkboxBtnField}>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          I agree with T&C
        </div>
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="image">Upload image</label>
        <div className={style.form_fileBtnField}>
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target?.files?.[0]!)}
            placeholder="Enter Upload File"
            accept="image/jpeg, image/png"
          />
        </div>
      </div>
      <div className={style.form_inputWrapper}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={(e) => setCountry((e.target as HTMLInputElement).value)}
          placeholder="Russia"
          className={style.form_inputField}
        />
      </div>
      <div className={style.form_buttonsWrapper}>
        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
}
