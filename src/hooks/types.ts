export type PossibleValidationFields = "email" | "password" | "username";

export interface UseValidation {
  validation: (value: string, type: PossibleValidationFields) => void;
  validFields: ValidationFields;
}

export interface ValidationField {
  isValid: boolean;
  isDirty: boolean;
}

export interface ValidationFields {
  email: ValidationField;
  username: ValidationField;
  password: ValidationField;
}
