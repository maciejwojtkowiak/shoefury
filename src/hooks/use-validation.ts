import { useState } from "react";

import {
  PossibleValidationFields,
  UseValidation,
  ValidationFields,
} from "./types";

export const useValidation = (): UseValidation => {
  const [validFields, setValidFields] = useState<ValidationFields>({
    email: {
      isValid: false,
      isDirty: false,
    },
    username: {
      isValid: false,
      isDirty: false,
    },
    password: {
      isValid: false,
      isDirty: false,
    },
  });
  const validation = (value: string, type: PossibleValidationFields): void => {
    if (!value)
      setValidFields((prevValid) => {
        return {
          ...prevValid,
          [type]: {
            isValid: false,
            isDirty: true,
          },
        };
      });
  };

  return {
    validation,
    validFields,
  };
};
