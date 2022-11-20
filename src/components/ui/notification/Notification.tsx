import React from "react";
import { theme } from "config/theme";
import { useAppSelector } from "store/hooks/reduxHooks";

const Notification = (): JSX.Element => {
  const notification = useAppSelector((state) => state.notificationReducer);
  const colorHandler = (): string => {
    if (notification.type === "error") return theme.errorRed;
    if (notification.type === "success") return theme.successGreen;
    return theme.infoOrange;
  };
  return (
    <div className="absolute top-[150%] right-[5%] bg-white drop-shadow-2xl w-[350px] h-[80px] grid place-items-center">
      <p
        className="font-bold text-2xl underline"
        style={{ textDecorationColor: colorHandler() }}
      >
        {notification.message}Account has been created
      </p>
    </div>
  );
};

export default Notification;
