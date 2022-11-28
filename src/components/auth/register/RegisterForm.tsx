import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValidation } from "hooks/use-validation";
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
  const validation = useValidation();
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

  useEffect(() => {
    validation.validation(name, "username");
  }, [name]);
  return (
    <AuthForm>
      <LogoSection />
      <FormInput
        placeholder="Enter your name"
        isValid={validation.validFields.username.isValid}
        name="username"
        type="text"
        onChange={(e) => onChangeHandler(e, setName)}
      />
      <FormInput
        placeholder="Enter your email"
        isValid={validation.validFields.email.isValid}
        name="email"
        type="email"
        onChange={(e) => onChangeHandler(e, setEmail)}
      />
      <FormInput
        placeholder="Enter your password"
        isValid={validation.validFields.password.isValid}
        name="password"
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
