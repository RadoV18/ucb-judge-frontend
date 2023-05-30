import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AppAuthGuard } from './auth/guards/app-auth.guard';
import { ErrorComponent } from './shared/pages/error/error.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';
import { AccountSettingsComponent } from './user/pages/account-settings/account-settings.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { PasswordUpdateComponent } from './user/pages/password-update/password-update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'password-update',
    component: PasswordUpdateComponent,
    canActivate: [AppAuthGuard]
  },
  // TODO: CHANGE ROUTE TO 404 PAGE
  {
    path: '**',
    redirectTo: 'register',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
