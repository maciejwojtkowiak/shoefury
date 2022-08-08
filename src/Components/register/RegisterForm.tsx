import React, { useState } from 'react';
import FormInput from '../ui/inputs/FormInput';
import config from '../../config.json';
import FormButton from '../ui/buttons/FormButton';
import LogoIcon from '../svg/LogoIcon';

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
    localStorage.setItem('token', data.token);
  };
  return (
    <div className="grid place-items-center w-full h-screen ">
      <form className="grid place-items-center flex-col gap-16 w-[500px] h-[700px] px-8 py-4 border-2 bg-white">
        <div className="place-self-stretch-center text-4xl font-bold flex flex-row">
          <div className=" drop-shadow-xl rounded-md">
            <LogoIcon />
          </div>
          <h1>Shoe Fury</h1>
        </div>

        <div className="h-full grid place-items-center w-full">
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
        </div>
        <FormButton buttonText="Register" onClickHandler={onClickHandler} />
      </form>
    </div>
  );
};

export default RegisterForm;
