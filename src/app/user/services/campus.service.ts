import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from '../../shared/dto/response.dto';
import { CampusDto } from '../dto/campus.dto';

@Injectable({
  providedIn: 'root',
})
export class CampusService {
  apiUrl = 'http://localhost:8282/uj-users';

  constructor(private http: HttpClient) {}

  public getCampuses() { 
    return this.http.get<ResponseDto<CampusDto[]>>(
      `${this.apiUrl}/api/v1/campuses`
    );
  }
}
