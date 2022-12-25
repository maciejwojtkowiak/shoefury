import React from "react";

interface AddCommentButtonProps {
  showHandler: () => void;
}

const AddCommentButton = ({
  showHandler,
}: AddCommentButtonProps): JSX.Element => {
  return (
    <button data-testid="add-comment-button" onClick={showHandler}>
      Add comment
    </button>
  );
};

export default AddCommentButton;
