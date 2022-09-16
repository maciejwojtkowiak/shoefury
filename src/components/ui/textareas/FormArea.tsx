import React from "react";

interface FormAreaProps {
  placeholder: string;
}

const FormArea = ({ placeholder }: FormAreaProps): JSX.Element => {
  return (
    <textarea
      className="w-full border-2 border-orange-200 focus:border-orange-300 focus:outline-none p-2 resize-none"
      placeholder={placeholder}
    ></textarea>
  );
};

export default FormArea;
