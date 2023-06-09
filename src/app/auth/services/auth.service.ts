import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8282/uj-users';

  constructor(private http: HttpClient) {}

  public createStudent(student: UserDto) {
    return this.http.post<String>(
      `${this.apiUrl}/api/v1/users/student`,
      student
    );
  }
}
