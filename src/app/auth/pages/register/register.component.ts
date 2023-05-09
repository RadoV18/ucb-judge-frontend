import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { UserDto } from '../../dto/user.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {
  messages: Message[] = [];

  constructor(private authService: AuthService) { }

  onFormSubmitted(formData: UserDto) {
    if (formData.password !== formData.confirmPassword) {
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Passwords do not match' }];
      return;
    }
    this.authService.createStudent(formData).subscribe({
      next: (data) => {
        console.log(data);
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'User created' }];
      },
      error: ({ error }) => {
        console.log(error);
        this.messages = [{ severity: 'error', summary: 'Error', detail: error.message }];
      }
    })
  }

}
