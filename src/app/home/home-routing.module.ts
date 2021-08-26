import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewtaskComponent } from '../newtask/newtask.component';
import { ProfileComponent } from '../profile/profile.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
