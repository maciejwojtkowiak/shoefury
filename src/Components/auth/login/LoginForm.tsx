import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "services/authApi/login";

import FormButton from "components/ui/buttons/RoundedButton";
import FormInput from "components/ui/inputs/FormInput";

import AuthForm from "../ui/AuthForm";
import FormHeader from "../ui/FormHeader";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValueFunc: (val: string) => void,
  ): void => {
    setValueFunc(e.target.value);
  };
  const loginHandler = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const handleLogin = async (): Promise<void> => {
      try {
        const response = await Login(email, password);
        console.log("RESPONSE", response);
        // TO DO add type to login
        localStorage.setItem("token", response.token ?? "");
        navigate("/", { replace: true });
      } catch (e) {
        console.log(e);
      }
    };
    void handleLogin();
  };
  console.log(email, password);
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
      <FormButton onClickHandler={loginHandler} buttonText="Login" />
    </AuthForm>
  );
};

export default LoginForm;
