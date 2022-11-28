import React from "react";

interface FormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  type: string;
  isValid: boolean;
}

const FormInput = ({
  onChange,
  name,
  isValid,
  placeholder,
  type,
}: FormInputProps): JSX.Element => {
  return (
    <input
      disabled={isValid}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      className="border-b-2 border-orange-200 focus:border-orange-400 focus:outline-none transition delay-50 w-full"
    />
  );
};

export default FormInput;
