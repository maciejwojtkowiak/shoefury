import React from "react";
interface SquareButtonProps {
  buttonText: string;
  height: string;
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  width: string;
  textSize: string;
}

const SquareButton = ({
  buttonText,
  onClickHandler,
  height,
  textSize,
  width,
}: SquareButtonProps): JSX.Element => {
  return (
    <button
      onClick={(event) => onClickHandler(event)}
      className={`${width} ${height} border-2 justify-self-end bg-orange-300 text-${textSize} font-bold text-white`}
    >
      {buttonText}
    </button>
  );
};

export default SquareButton;
