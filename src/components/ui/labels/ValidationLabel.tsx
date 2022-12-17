import React from "react";

interface ValidationLabelProps {
  labelText: string;
}

const ValidationLabel = ({ labelText }: ValidationLabelProps): JSX.Element => {
  return <label>{labelText}</label>;
};

export default ValidationLabel;
