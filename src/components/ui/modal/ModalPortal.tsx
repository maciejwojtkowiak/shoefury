import React, { PropsWithChildren } from "react";

import Portal from "components/portal/Portal";
import CloseIcon from "components/svg/CloseIcon";

import { IModalProps } from "./types";

interface ModalPortalProps extends PropsWithChildren {
  modalProps: IModalProps;
}

const ModalPortal = ({
  children,
  modalProps: { modalIsShown, hideHandler },
}: ModalPortalProps): JSX.Element | null => {
  if (!modalIsShown) return null;

  return (
    <Portal rootId="modal">
      <div className="fixed bg-gray-500/[0.2] h-screen w-screen z-50 flex justify-center place-items-center">
        <div className="bg-white min-w-[600px] min-h-[300px] relative">
          <div
            className="absolute right-[2%] top-[2%] cursor-pointer"
            onClick={hideHandler}
          >
            <CloseIcon size={32} color="#FFA500" />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalPortal;
