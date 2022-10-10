import React, { useEffect } from "react";

import { useModal } from "components/ui/modal/use-modal";

import UserInfo from "./userInfo/UserInfo";
import OrderList from "./OrderList";

const Profile = (): JSX.Element => {
  const modal = useModal();
  useEffect(() => {}, []);
  return (
    <div className="h-[1000px] w-[1400px] " onClick={modal.showHandler}>
      <UserInfo />
      <OrderList />
    </div>
  );
};

export default Profile;
