import React, { useState } from 'react';
import FormInput from './FormInput';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (val: string) => void
  ) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onClickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };
  return (
    <form className="grid place-items-center h-screen border-2">
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
      <button onClick={onClickHandler}>Register</button>
    </form>
  );
};

export default RegisterForm;
