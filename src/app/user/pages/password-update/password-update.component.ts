import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: []
})
export class PasswordUpdateComponent {
  changePasswordForm: FormGroup;
  userId: String;
  messages: Message[] = [];

  constructor(
    private keycloakService: KeycloakService,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.userId = this.keycloakService.getKeycloakInstance().subject || '';
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData  = this.changePasswordForm.value;
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Passwords do not match' }];
      return;
    }

    this.userService.updatePassword(this.userId, formData).subscribe({
      next: (data) => {
        // console.log(data);
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Password updated' }];
      },
      error: ({error}) => {
        console.log(error);
        this.messages = [{ severity: 'error', summary: 'Error', detail: error.message }];
      }
    });
      
     
  }

}

