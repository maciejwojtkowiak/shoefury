import React from "react";
import { IoClose } from "react-icons/io5";

interface CloseIconProps {
  size: number;
  color: string;
}

const CloseIcon = ({ size, color }: CloseIconProps): JSX.Element => {
  return <IoClose color={color} size={size} />;
};

export default CloseIcon;
