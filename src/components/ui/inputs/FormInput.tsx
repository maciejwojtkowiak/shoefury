import React, { useEffect } from "react";
import { PossibleValidationFields } from "hooks/types";
import { useValidation } from "hooks/use-validation";

import ValidationLabel from "../labels/ValidationLabel";

interface FormInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  validationType: PossibleValidationFields;
  placeholder: string;
  value: string;
  type: string;
}

const FormInput = ({
  onChange,
  name,
  placeholder,
  validationType,
  value,
  type,
}: FormInputProps): JSX.Element => {
  const validation = useValidation();
  useEffect(() => {
    validation.validate(value, validationType);
  }, [value]);
  const field = validation.validFields[validationType];

  return (
    <div className="w-full">
      <input
        style={{ borderColor: field.isDirty && !field.isValid ? "red" : "" }}
        onChange={onChange}
        onBlur={validation.onBlurHandler}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        className="border-b-2 border-orange-200 focus:border-orange-400 focus:outline-none transition delay-50 w-full"
      />
      {field.isDirty && !field.isValid ? (
        <ValidationLabel labelText={field.validationLabel} />
      ) : null}
    </div>
  );
};

export default FormInput;
