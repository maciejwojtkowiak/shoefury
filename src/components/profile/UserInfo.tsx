import React from "react";
import shoeImg from "images/shoe.png";

const UserInfo = (): JSX.Element => {
  return (
    <div className="px-12 pt-32 bg-red-400 flex">
      <img src={shoeImg} className="w-[400px] h-[400px] rounded-full " />
      <h3 className="text-4xl font-bold">Maciej Wojtkowiak</h3>
    </div>
  );
};

export default UserInfo;
