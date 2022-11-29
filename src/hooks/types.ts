export type PossibleValidationFields =
  | "email"
  | "password"
  | "username"
  | "genericInput";

export interface UseValidation {
  validation: (value: string, type: PossibleValidationFields) => void;
  validFields: ValidationFields;
  onBlurHandler: () => void;
  isBlurred: boolean;
}

export interface ValidationField {
  isValid: boolean;
  isDirty: boolean;
}

export interface ValidationFields {
  email: ValidationField;
  username: ValidationField;
  password: ValidationField;
  genericInput: ValidationField;
}
