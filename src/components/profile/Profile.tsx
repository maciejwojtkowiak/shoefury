import React from "react";

import ModalPortal from "components/ui/modal/ModalPortal";
import { useModal } from "components/ui/modal/use-modal";

const Profile = (): JSX.Element => {
  const modal = useModal();
  return (
    <ModalPortal {...modal}>
      <div onClick={modal.showHandler}>HEj</div>
    </ModalPortal>
  );
};

export default Profile;
