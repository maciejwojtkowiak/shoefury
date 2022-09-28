import { useState } from "react";

interface IUseModal {
  modalIsShown: boolean;
  showHandler: () => void;
}

export const useModal = (): IUseModal => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showHandler = (): void => {
    setModalIsShown((prevModal) => !prevModal);
  };

  return {
    modalIsShown,
    showHandler,
  };
};
