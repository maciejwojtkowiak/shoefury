import React, { useState } from 'react';
import FormButton from '../../ui/buttons/FormButton';
import FormInput from '../../ui/inputs/FormInput';
import AuthForm from '../ui/AuthForm';
import FormHeader from '../ui/FormHeader';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValueFunc: (val: string) => void
  ) => {
    setValueFunc(e.target.value);
  };
  const onClickHandler = () => {};
  return (
    <AuthForm>
      <FormHeader />
      <FormInput
        onChange={(e) => onValueChange(e, setEmail)}
        placeholder="Enter email"
        type="email"
      />
      <FormInput
        onChange={(e) => onValueChange(e, setPassword)}
        placeholder="Enter password"
        type="password"
      />
      <FormButton onClickHandler={} buttonText="Login" />
    </AuthForm>
  );
};

export default LoginForm;
