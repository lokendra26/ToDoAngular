import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskeditComponent } from './taskedit/taskedit.component';

const routes: Routes = [
  {path: "splash-screen",component: SplashScreenComponent},
  {path: "login", component: LoginComponent},
  {path: "register",component: RegisterComponent},
  {path:"home",component:HomeComponent},
  {path: "home",component: HomeComponent,
    children: [
        { path : 'task-list', component: TaskListComponent},
        { path : 'profile', component: ProfileComponent},
        { path : 'newtask', component: NewtaskComponent},
        { path : 'taskedit', component: TaskeditComponent}
  ]},
  /*{path: "home/newtask", component:NewtaskComponent},
  {path: "home/profile", component:ProfileComponent},
  {path: "home/task-list", component:TaskListComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
