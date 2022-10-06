import React from "react";

import { useModal } from "components/ui/modal/use-modal";

import OrderList from "./OrderList";
import UserInfo from "./UserInfo";

const Profile = (): JSX.Element => {
  const modal = useModal();
  return (
    <div className="h-[1000px] w-[1400px] " onClick={modal.showHandler}>
      <UserInfo />
      <OrderList />
    </div>
  );
};

export default Profile;
