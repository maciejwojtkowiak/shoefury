export type PossibleValidationFields =
  | "email"
  | "password"
  | "username"
  | "genericInput";

export interface IUseValidation {
  validate: (value: string, type: PossibleValidationFields) => void;
  validFields: ValidationFields;
  onBlurHandler: () => void;
  isBlurred: boolean;
}

export interface ValidationField {
  isValid: boolean;
  isDirty: boolean;
  validationLabel: string;
}

export interface ValidationFields {
  email: ValidationField;
  username: ValidationField;
  password: ValidationField;
  genericInput: ValidationField;
}
