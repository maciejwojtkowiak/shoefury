import React from "react";
interface RoundedButtonProps {
  buttonText: string;
  name: string;
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const RoundedButton = ({
  buttonText,
  name,
  onClickHandler,
}: RoundedButtonProps): JSX.Element => {
  return (
    <button
      name={name}
      onClick={(event) => onClickHandler(event)}
      className="border-2 border-orange-200 rounded-full px-12 py-2 font-bold text-xl  hover:bg-orange-400 hover:text-white transition"
    >
      {buttonText}
    </button>
  );
};

export default RoundedButton;
