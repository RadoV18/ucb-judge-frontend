import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakUserDto } from '../dto/keycloak-user.dto';
import { UserDto } from 'src/app/auth/dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:8282/uj-users"

  constructor(private http: HttpClient) {
  }

  public getUser(userId: string) {
    return this.http.get<KeycloakUserDto>(`${this.apiUrl}/v1/api/users/${userId}`);
  }

  public updateUser(userId: string, user: UserDto) {
    return this.http.put<KeycloakUserDto>(`${this.apiUrl}/v1/api/users/${userId}`, user);
  }

  public deleteUser(userId: string) {
    return this.http.delete<KeycloakUserDto>(`${this.apiUrl}/v1/api/users/${userId}`);
  }
}