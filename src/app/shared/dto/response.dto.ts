export interface ResponseDto<T> {
  data: T | null;
  message: string;
  successfull: boolean;
}
