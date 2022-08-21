import React, { useState } from 'react';
import FormInput from '../../ui/inputs/FormInput';
import config from '../../../config.json';
import FormButton from '../../ui/buttons/FormButton';
import LogoSection from '../ui/FormHeader';
import AuthForm from '../ui/AuthForm';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../../../store/user-slice';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (val: string) => void
  ) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${config.backendDomain}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log('REGISTER DATA', data);
    localStorage.setItem('token', data.token);
    dispatch(userAction.setIsAuth(true));
    navigate('/', { replace: true });
  };
  return (
    <AuthForm>
      <LogoSection />
      <FormInput
        placeholder="Enter your name"
        type="text"
        onChange={(e) => onChangeHandler(e, setName)}
      />
      <FormInput
        placeholder="Enter your email"
        type="email"
        onChange={(e) => onChangeHandler(e, setEmail)}
      />
      <FormInput
        placeholder="Enter your password"
        type="password"
        onChange={(e) => onChangeHandler(e, setPassword)}
      />

      <FormButton buttonText="Register" onClickHandler={onClickHandler} />
    </AuthForm>
  );
};

export default RegisterForm;
