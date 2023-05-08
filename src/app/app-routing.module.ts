import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AppAuthGuard } from './auth/guards/app-auth.guard';
import { ErrorComponent } from './shared/pages/error/error.component';
import { UserProfileComponent } from './user/pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
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
