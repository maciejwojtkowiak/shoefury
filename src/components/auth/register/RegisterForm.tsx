import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks/reduxHooks";
import { registerUser } from "store/user/thunks";

import FormButton from "components/ui/buttons/RoundedButton";

import { userAction } from "../../../store/user/user-slice";
import FormInput from "../../ui/inputs/FormInput";
import AuthForm from "../ui/AuthForm";
import LogoSection from "../ui/FormHeader";

const RegisterForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (val: string) => void,
  ): void => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onClickHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    const handleRegister = async (): Promise<void> => {
      try {
        void dispatch(registerUser({ name, email, password }));
        // const data = await response.json();
        // localStorage.setItem("token", data.token);
        dispatch(userAction.setIsAuth(true));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    void handleRegister();
  };

  return (
    <AuthForm>
      <LogoSection />
      <FormInput
        placeholder="Enter your name"
        name="username"
        type="text"
        validationType="username"
        value={name}
        onChange={(e) => onChangeHandler(e, setName)}
      />
      <FormInput
        placeholder="Enter your email"
        name="email"
        type="email"
        validationType="email"
        value={email}
        onChange={(e) => onChangeHandler(e, setEmail)}
      />
      <FormInput
        placeholder="Enter your password"
        name="password"
        validationType="password"
        value={password}
        type="password"
        onChange={(e) => onChangeHandler(e, setPassword)}
      />

      <FormButton
        buttonText="Register"
        name="register-btn"
        onClickHandler={onClickHandler}
      />
    </AuthForm>
  );
};

export default RegisterForm;
