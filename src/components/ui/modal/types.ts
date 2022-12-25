export interface IModalProps {
  hideHandler: () => void;
  modalIsShown: boolean;
}

export interface IUseModal {
  modalProps: IModalProps;
  showHandler: () => void;
}
