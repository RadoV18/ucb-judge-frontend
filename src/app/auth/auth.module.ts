import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    RegistrationFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
