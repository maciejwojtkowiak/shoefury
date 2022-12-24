import React from "react";

interface ValidationLabelProps {
  labelText: string;
}

const ValidationLabel = ({ labelText }: ValidationLabelProps): JSX.Element => {
  return (
    <label className="text-sm text-red-500 font-semibold">{labelText}</label>
  );
};

export default ValidationLabel;
