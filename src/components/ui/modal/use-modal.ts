import { useState } from "react";

import { IUseModal } from "./types";

export const useModal = (): IUseModal => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showHandler = (): void => {
    setModalIsShown(true);
  };

  const hideHandler = (): void => {
    setModalIsShown(false);
  };

  return {
    modalProps: {
      hideHandler,
      modalIsShown,
    },
    showHandler,
  };
};
