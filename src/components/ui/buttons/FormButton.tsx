import React from "react";
interface FormButtonProps {
  buttonText: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const FormButton = ({
  buttonText,
  onClickHandler,
}: FormButtonProps): JSX.Element => {
  return (
    <button
      onClick={() => onClickHandler}
      className="border-2 border-orange-200 rounded-full px-12 py-2 font-bold text-xl hover:border-orange-500 hover:bg-orange-400 hover:text-white transition"
    >
      {buttonText}
    </button>
  );
};

export default FormButton;
