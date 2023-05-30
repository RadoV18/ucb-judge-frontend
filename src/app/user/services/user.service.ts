import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakUserDto } from '../dto/keycloak-user.dto';
import { UserDto } from 'src/app/auth/dto/user.dto';
import { ResponseDto } from '../../shared/dto/response.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:8282/uj-users';

  constructor(private http: HttpClient) {}

  public getUser(userId: String) {
    return this.http.get<ResponseDto<KeycloakUserDto>>(
      `${this.apiUrl}/api/v1/users/profile/${userId}`
    );
  }

  public updateUser(userId: String, user: UserDto) {
    return this.http.put<ResponseDto<KeycloakUserDto>>(
      `${this.apiUrl}/api/v1/users/profile/${userId}`,
      user
    );
  }

  public deleteUser(userId: String) {
    return this.http.delete<ResponseDto<KeycloakUserDto>>(
      `${this.apiUrl}/api/v1/users/profile/${userId}`
    );
  }

  public updatePassword(userId: String, user: UserDto) {
    return this.http.put<ResponseDto<String>>(
      `${this.apiUrl}/api/v1/users/profile/${userId}/password`,
      user
    );
  }
}
