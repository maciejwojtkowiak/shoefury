import React, { useEffect, useState } from "react";
import { useModal } from "hooks/use-modal";
import { getProfile } from "services/profileApi/profileApi";
import { IProfile } from "types/api/profile/profile";

import OrderList from "./orders/OrderList";
import UserInfo from "./userInfo/UserInfo";

const Profile = (): JSX.Element => {
  const [profileData, setProfileData] = useState<IProfile>();
  const [loading, setLoading] = useState(true);
  const modal = useModal();
  useEffect(() => {
    const fetchProfile = async (): Promise<void> => {
      const data = await getProfile();
      setProfileData(data);
    };
    void fetchProfile();
    setLoading(false);
  }, []);
  console.log("PROFILE", profileData);
  if (loading) return <h1>loading</h1>;
  if (!loading && profileData) {
    return (
      <div className="h-[1000px] w-[1400px] " onClick={modal.showHandler}>
        <UserInfo name={profileData.name} />
        <OrderList orders={profileData.orders} />
      </div>
    );
  }
  return <h1>Error</h1>;
};

export default Profile;
