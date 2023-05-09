import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakUserDto } from '../../dto/keycloak-user.dto';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: []
})
export class UserProfileComponent implements OnInit {
  userId: String;
  keycloakUserDto: KeycloakUserDto | null = null;

  constructor(private keycloakService: KeycloakService, private UserService: UserService) {
    this.userId = this.keycloakService.getKeycloakInstance().subject || '';
  }

  ngOnInit(): void {
    this.UserService.getUser(this.userId).subscribe({
      next: (data) => {
        console.log(data);
        this.keycloakUserDto = data.response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
