import { Component } from '@angular/core';
import { KeycloakUserDto } from '../../dto/keycloak-user.dto';
import { KeycloakService } from 'keycloak-angular';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { UserDto } from 'src/app/auth/dto/user.dto';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent {
  profileForm: FormGroup;
  userId: String;
  keycloakUserDto: KeycloakUserDto | null = null;
  messages: Message[] = [];

  constructor(private keycloakService: KeycloakService, private userService: UserService, private formBuilder: FormBuilder) {
    this.userId = this.keycloakService.getKeycloakInstance().subject || '';
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe({
      next: (data) => {
        console.log(data);
        this.keycloakUserDto = data.response;
        this.profileForm.patchValue({
          firstName: this.keycloakUserDto?.firstName,
          lastName: this.keycloakUserDto?.lastName,
          email: this.keycloakUserDto?.email,
        });
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200/');
  }

  onSubmit() {
    const formData = this.profileForm.value;
    this.userService.updateUser(this.userId, formData).subscribe({
      next: (data) => {
        console.log(data);
        this.keycloakUserDto = data.response;
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Profile updated' }];
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  deleteProfile() {
    this.userService.deleteUser(this.userId).subscribe({
      next: (data) => {
        console.log(data);
        this.keycloakService.logout('http://localhost:4200/');
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
