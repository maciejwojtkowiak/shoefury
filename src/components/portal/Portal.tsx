import { createPortal } from "react-dom";

import { usePortal } from "./use-portal";

interface PortalProps {
  rootId: string;
  children: JSX.Element;
}

const Portal = ({ rootId, children }: PortalProps): JSX.Element => {
  const portalContainer = usePortal(rootId);

  return createPortal(children, portalContainer);
};

export default Portal;
