import { useEffect, useState } from "react";
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
    [type]: {
      isValid: false,
      isDirty: false,
      validationLabel: "",
    },
  });

  const [isBlurred, setIsBlured] = useState<boolean>(false);

  useEffect(() => {
    setValidFields((prevValid) => {
      return {
        [type]: {
          ...prevValid[type],
          isDirty: isBlurred,
        },
      };
    });
  }, [isBlurred]);
  const onBlurHandler = (): void => {
    setIsBlured(true);
  };

  const validationFailed = (validationMessage: string): void => {
    setValidFields(() => {
      return {
        [type]: {
          isValid: false,
          isDirty: isBlurred,
          validationLabel: validationMessage,
        },
      };
    });
  };

  const validationSuccess = (): void => {
    setValidFields(() => {
      return {
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
      throw new Error("Validaiton failed");
    }
  };
  const validate = (value: string): void => {
    try {
      checkFailureHandler(value.length === 0, "Input can not be empty");

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
        console.log(regexData.containsSpecialCharacter.test(value));
        checkFailureHandler(
          !regexChecker(regexData.containsCapitalLetter, value),
          "Password must contain capital letter",
        );

        checkFailureHandler(
          !regexChecker(regexData.containsSpecialCharacter, value),
          "Password must contain special character",
        );
      }
      validationSuccess();
    } catch (error) {}
  };

  return {
    validate,
    validFields,
    isBlurred,
    onBlurHandler,
  };
};
