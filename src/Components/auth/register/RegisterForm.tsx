import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { config } from "config/config";

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
  const dispatch = useDispatch();
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
        const response = await fetch(`${config.backendDomain}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
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
