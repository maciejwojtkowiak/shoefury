export type PossibleValidationFields =
  | "email"
  | "password"
  | "username"
  | "genericInput";

export interface IUseValidation {
  validate: (value: string) => void;
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
  [key: string]: ValidationField;
}
