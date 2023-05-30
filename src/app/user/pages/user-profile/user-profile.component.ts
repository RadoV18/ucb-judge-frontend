import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakUserDto } from '../../dto/keycloak-user.dto';
import { CampusMajorService } from '../../services/campus-major.service';
import { CampusMajorDto } from '../../dto/campus-major.dto';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [],
})
export class UserProfileComponent implements OnInit {
  userId: String;
  keycloakUserDto: KeycloakUserDto | null = null;
  campusMajorDto: CampusMajorDto | null = null;

  constructor(
    private keycloakService: KeycloakService,
    private userService: UserService,
    private campusMajorService: CampusMajorService
  ) {
    this.userId = this.keycloakService.getKeycloakInstance().subject || '';
  }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe({
      next: (data) => {
        // console.log(data);
        this.keycloakUserDto = data.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.campusMajorService.getCampusMajorByUserId(this.userId).subscribe({
      next: (data) => {
        this.campusMajorDto = data.data;
        // console.log(data);
      },
      error: (error) => {
        console.log(error);
      }

    })
  }
}
