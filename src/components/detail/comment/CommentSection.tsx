import React from "react";
import { useModal } from "hooks/use-modal";

import ModalPortal from "components/ui/modal/ModalPortal";

import AddCommentButton from "./AddCommentButton";

const CommentSection = (): JSX.Element => {
  const modal = useModal();
  return (
    <div className="w-full" data-testid="comment-section">
      <AddCommentButton showHandler={modal.showHandler} />
      <ModalPortal modalProps={modal.modalProps}>
        <div>HEJ</div>
        <h1>Hej</h1>
      </ModalPortal>
      <ul></ul>
    </div>
  );
};

export default CommentSection;
