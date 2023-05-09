import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class UserModule { }
