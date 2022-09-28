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
      <div className="fixed opacity-50 bg-gray-500 h-screen w-screen z-50">
        <div className="bg-white w-[600px] h-[400px]">{children}</div>
      </div>
    </Portal>
  );
};

export default ModalPortal;
