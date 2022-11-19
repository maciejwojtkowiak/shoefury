import React from "react";
import { useAppSelector } from "store/hooks/reduxHooks";

const Notification = (): JSX.Element => {
  const message = useAppSelector((state) => state.notificationReducer.message);
  return (
    <div className="absolute top-[13%] right-[8%] z-10 bg-white drop-shadow-xl w-[300px] h-[60px] grid place-items-center">
      <p className="font-bold">{message}Account has been created</p>
    </div>
  );
};

export default Notification;
