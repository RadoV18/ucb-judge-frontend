import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordUpdateComponent } from './pages/password-update/password-update.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    AccountSettingsComponent,
    PasswordUpdateComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
