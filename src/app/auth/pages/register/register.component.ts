import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { UserDto } from '../../dto/user.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {
  messages: Message[] = [];

  onFormSubmitted(formData: UserDto) {
    if (formData.password !== formData.confirmPassword) {
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Passwords do not match' }];
      return;
    }
    this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
    console.log(formData); // Do something with the submitted form data
  }

}
