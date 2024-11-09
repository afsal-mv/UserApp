import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  { path: 'login' , component:LoginComponent},
  { path: '' , redirectTo:'login' ,pathMatch:'full'},  
  { path: 'dashboard' , component:DashboardComponent}, 
  { path: 'myprofile' , component:MyprofileComponent}, 
  { path: 'createuser' , component:CreateuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
