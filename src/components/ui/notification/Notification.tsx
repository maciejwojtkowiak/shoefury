import React from "react";
import { useAppSelector } from "store/hooks/reduxHooks";

const Notification = (): JSX.Element => {
  const message = useAppSelector((state) => state.notificationReducer.message);
  return (
    <div className="absolute top-[150%] right-[5%] bg-white drop-shadow-2xl w-[350px] h-[80px] grid place-items-center">
      <p className="font-bold text-2xl underline">
        {message}Account has been created
      </p>
    </div>
  );
};

export default Notification;
