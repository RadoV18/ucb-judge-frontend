import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '../../dto/user.dto';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styles: [
  ]
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  @Output() formSubmitted = new EventEmitter<UserDto>();

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }



  onSubmit() {
    const formData = this.registrationForm.value;
    this.formSubmitted.emit(formData);
  }
}
