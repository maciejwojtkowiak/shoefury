import React from 'react';

interface FormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

const FormInput = ({ onChange, placeholder, type }: FormInputProps) => {
  return <input onChange={onChange} placeholder={placeholder} type={type} />;
};

export default FormInput;
