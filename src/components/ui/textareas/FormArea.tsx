import React, { ChangeEvent } from "react";

interface FormAreaProps {
  onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder: string;
}

const FormArea = ({
  onChangeHandler,
  name,
  placeholder,
}: FormAreaProps): JSX.Element => {
  return (
    <textarea
      className="w-full border-2 border-orange-200 focus:border-orange-300 focus:outline-none p-2 resize-none"
      rows={40}
      onChange={onChangeHandler}
      placeholder={placeholder}
    ></textarea>
  );
};

export default FormArea;
