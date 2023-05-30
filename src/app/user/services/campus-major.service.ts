import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../../shared/dto/response.dto';
import { CampusMajorDto } from '../dto/campus-major.dto';

@Injectable({
  providedIn: 'root',
})
export class CampusMajorService {
  apiUrl = 'http://localhost:8282/uj-users';

  constructor(private http: HttpClient) {}

  public getMajorsByCampusId(campusId: number) {
    return this.http.get<ResponseDto<CampusMajorDto[]>>(
      `${this.apiUrl}/api/v1/campus-majors/campus/${campusId}`
    );
  }

  public getCampusMajorByUserId(userId: String) {
    return this.http.get<ResponseDto<CampusMajorDto>>(
      `${this.apiUrl}/api/v1/campus-majors/student/${userId}`
    );
  }
}
