import React from 'react';

interface FormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

const FormInput = ({ onChange, placeholder, type }: FormInputProps) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="border-b-2 border-orange-200 focus:border-orange-400 focus:outline-none transition delay-50 w-full"
    />
  );
};

export default FormInput;
