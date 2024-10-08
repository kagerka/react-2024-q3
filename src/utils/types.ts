export type CardProps = {
  card: CardType;
};

export type CardType = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean | string;
  file: string;
  country: string;
  time: number;
};

export type FormDataType = {
  name: string;
  gender: string;
  terms: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  file: File | FileList;
  country: string;
};
