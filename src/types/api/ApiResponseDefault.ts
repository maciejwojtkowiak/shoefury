export interface ApiResponse<T extends ApiResponseDefault> {
  data: T;
}

export interface ApiResponseDefault {
  message: string;
  error: boolean;
}
