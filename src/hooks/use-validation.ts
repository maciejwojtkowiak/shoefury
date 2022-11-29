import { useState } from "react";
import { config } from "config/config";
import { regexData } from "utils/regex/regex";
import { regexChecker } from "utils/regex/regexChecker";

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
    generic: {
      isValid: false,
      isDirty: false,
    },
  });

  const validationFailed = (type: PossibleValidationFields): void => {
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

  const validationSuccess = (type: PossibleValidationFields): void => {
    setValidFields((prevValid) => {
      return {
        ...prevValid,
        [type]: {
          isValid: true,
          isDirty: true,
        },
      };
    });
  };
  const validation = (value: string, type: PossibleValidationFields): void => {
    // generic validation
    // walidacja w FormInput komponent
    if (!value) validationFailed(type);
    else validationSuccess(type);

    if (type === "email") {
      if (!regexChecker(regexData.containsWhitespace, value))
        validationFailed(type);
    }

    if (type === "password") {
      if (
        value.length < config.minPasswordLength &&
        regexChecker(regexData.containsCapitalLetter, value) &&
        regexChecker(regexData.containsSpecialCharacter, value)
      ) {
        validationSuccess(type);
      }
    }
  };

  return {
    validation,
    validFields,
  };
};
