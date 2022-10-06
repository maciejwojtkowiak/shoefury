import React from "react";

import ModalPortal from "components/ui/modal/ModalPortal";
import { useModal } from "components/ui/modal/use-modal";

const Profile = (): JSX.Element => {
  const modal = useModal();
  return (
    <ModalPortal {...modal}>
      <h1 className="h-[1000px] w-[1400px] " onClick={modal.showHandler}>
        HEj
      </h1>
    </ModalPortal>
  );
};

export default Profile;
