import React from "react";

import { useModal } from "components/ui/modal/use-modal";

import UserInfo from "./UserInfo";

const Profile = (): JSX.Element => {
  const modal = useModal();
  return (
    <h1 className="h-[1000px] w-[1400px] " onClick={modal.showHandler}>
      <UserInfo />
    </h1>
  );
};

export default Profile;
