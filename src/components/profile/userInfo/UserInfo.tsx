import React from "react";
import { ImPencil } from "react-icons/im";
import shoeImg from "images/shoe.png";

interface UserInfoProps {
  name: string;
}

const UserInfo = ({ name }: UserInfoProps): JSX.Element => {
  return (
    <div className="px-12 pt-32 bg-gray-100 flex items-start">
      <img src={shoeImg} className="w-[400px] h-[400px] rounded-full " />
      <div className="flex">
        <h3 className="text-4xl font-bold">{name}</h3>
        <div className="self-center ml-4">
          <ImPencil size={24} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
