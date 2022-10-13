import React, { useEffect, useState } from "react";
import { getProfile } from "services/profileApi/profileApi";
import { IProfile } from "types/api/profile/profile";

import { useModal } from "components/ui/modal/use-modal";

import UserInfo from "./userInfo/UserInfo";
import OrderList from "./OrderList";

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
