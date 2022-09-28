import React from "react";

import Portal from "components/portal/Portal";

interface ModalPortalProps {
  isVisible: boolean;
  children: JSX.Element;
}

const ModalPortal = ({
  children,
  isVisible,
}: ModalPortalProps): JSX.Element | null => {
  if (!isVisible) return null;

  return (
    <Portal rootId="modal">
      <div className="fixed  bg-gray-500/[0.2] h-screen w-screen z-50 flex justify-center place-items-center">
        <div className="bg-white min-w-[600px] min-h-[300px]">{children}</div>
      </div>
    </Portal>
  );
};

export default ModalPortal;
