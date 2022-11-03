import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';

const routes: Routes = [
  { path : '', redirectTo : 'login', pathMatch: 'full'},
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'forgot-password', component : ForgotPasswordComponent},
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
