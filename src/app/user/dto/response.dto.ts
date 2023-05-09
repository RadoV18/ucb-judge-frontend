export interface ResponseDto<T> {
    statusCode: string;
    response: T | null;
    errorDetail: string | null;
}