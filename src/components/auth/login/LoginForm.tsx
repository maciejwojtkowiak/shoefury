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

        // TO DO add type to login
        localStorage.setItem("token", response.token ?? "");
        navigate("/", { replace: true });
      } catch (e) {
        console.log(e);
      }
    };
    void handleLogin();
  };

  return (
    <AuthForm>
      <FormHeader />
      <FormInput
        onChange={(e) => onValueChange(e, setEmail)}
        name="email"
        placeholder="Enter email"
        type="email"
        validationType="email"
        value={email}
      />
      <FormInput
        onChange={(e) => onValueChange(e, setPassword)}
        name="password"
        placeholder="Enter password"
        type="password"
        validationType="password"
        value={password}
      />
      <FormButton
        onClickHandler={loginHandler}
        name="login-btn"
        buttonText="Login"
      />
    </AuthForm>
  );
};

export default LoginForm;
