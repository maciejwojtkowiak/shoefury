import { useState } from "react";
import { config } from "config/config";
import { regexData } from "utils/regex/regex";
import { regexChecker } from "utils/regex/regexChecker";

import {
  IUseValidation,
  PossibleValidationFields,
  ValidationFields,
} from "./types";

export const useValidation = (
  type: PossibleValidationFields,
): IUseValidation => {
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

  const validationFailed = (validationMessage: string): void => {
    setValidFields((prevValid) => {
      return {
        ...prevValid,
        [type]: {
          isValid: false,
          isDirty: isBlurred,
          validationLabel: validationMessage,
        },
      };
    });
  };

  const validationSuccess = (): void => {
    setValidFields((prevValid) => {
      return {
        ...prevValid,
        [type]: {
          isValid: true,
          isDirty: isBlurred,
          validationLabel: "",
        },
      };
    });
  };

  const checkFailureHandler = (
    conditionToFail: boolean,
    errorMessage: string,
  ): void => {
    if (conditionToFail) {
      validationFailed(errorMessage);
      return;
    }
    validationSuccess();
  };
  const validate = (value: string): void => {
    checkFailureHandler(!value, "Input can not be empty");

    if (type === "email") {
      checkFailureHandler(
        !regexChecker(regexData.containsWhitespace, value),
        "email should have valid format <email>@<provider>.<extension>",
      );
    }

    if (type === "password") {
      checkFailureHandler(
        value.length < config.minPasswordLength,
        `Password must have ${config.minPasswordLength} characters`,
      );
      checkFailureHandler(
        regexChecker(regexData.containsCapitalLetter, value),
        "Password must contain capital letter",
      );
      if (
        value.length < config.minPasswordLength &&
        regexChecker(regexData.containsSpecialCharacter, value)
      ) {
        validationSuccess();
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
