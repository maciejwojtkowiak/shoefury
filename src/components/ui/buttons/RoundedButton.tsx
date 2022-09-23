import React from "react";
interface RoundedButtonProps {
  buttonText: string;
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

const RoundedButton = ({
  buttonText,
  onClickHandler,
}: RoundedButtonProps): JSX.Element => {
  return (
    <button
      onClick={(event) => onClickHandler(event)}
      className="border-2 border-orange-200 rounded-full px-12 py-2 font-bold text-xl  hover:bg-orange-400 hover:text-white transition"
    >
      {buttonText}
    </button>
  );
};

export default RoundedButton;
