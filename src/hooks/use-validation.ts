import { useState } from "react";
import { config } from "config/config";
import { regexData } from "utils/regex/regex";
import { regexChecker } from "utils/regex/regexChecker";

import {
  IUseValidation,
  PossibleValidationFields,
  ValidationFields,
} from "./types";

export const useValidation = (): IUseValidation => {
  const [validFields, setValidFields] = useState<ValidationFields>({
    email: {
      isValid: false,
      isDirty: false,
      validationLabel: "",
    },
    username: {
      isValid: false,
      isDirty: false,
      validationLabel: "",
    },
    password: {
      isValid: false,
      isDirty: false,
      validationLabel: "",
    },
    genericInput: {
      isValid: false,
      isDirty: false,
      validationLabel: "",
    },
  });

  const [isBlurred, setIsBlured] = useState<boolean>(false);

  const onBlurHandler = (): void => {
    setIsBlured(true);
  };
  const isDirty = !!isBlurred;

  const validationFailed = (
    type: PossibleValidationFields,
    validationMessage: string,
  ): void => {
    console.log("VALIDATION", validationMessage);
    setValidFields((prevValid) => {
      return {
        ...prevValid,
        [type]: {
          isValid: false,
          isDirty,
          validationLabel: validationMessage,
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
          isDirty,
          validationLabel: "",
        },
      };
    });
  };
  const validate = (value: string, type: PossibleValidationFields): void => {
    if (!value) validationFailed(type, "Input can not be empty");
    else validationSuccess(type);
    if (type === "email") {
      console.log(regexChecker(regexData.containsWhitespace, value));
      if (!regexChecker(regexData.containsWhitespace, value)) {
        console.log("VALIDATION STAGE");
        validationFailed(
          type,
          "email should have valid format <email>@<provider>.<extension>",
        );
      }
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
    validate,
    validFields,
    isBlurred,
    onBlurHandler,
  };
};
