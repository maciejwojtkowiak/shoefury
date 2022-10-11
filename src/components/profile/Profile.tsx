import React, { useEffect } from "react";
import { getProfile } from "services/profileApi/profileApi";

import { useModal } from "components/ui/modal/use-modal";

import UserInfo from "./userInfo/UserInfo";
import OrderList from "./OrderList";

const Profile = (): JSX.Element => {
  const modal = useModal();
  useEffect(() => {
    const fetchProfile = async (): Promise<void> => {
      const data = await getProfile();
      console.log(data);
    };
    void fetchProfile();
  }, []);
  return (
    <div className="h-[1000px] w-[1400px] " onClick={modal.showHandler}>
      <UserInfo />
      <OrderList />
    </div>
  );
};

export default Profile;
