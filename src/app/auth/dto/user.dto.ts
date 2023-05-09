export interface UserDto {
    firstName: string;
    lastName: string;
    email: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
}