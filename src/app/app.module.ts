import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { TaskserviceService } from './taskservice.service';
import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskeditComponent } from './taskedit/taskedit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SplashScreenComponent,
    HomeComponent,
    TaskListComponent,
    ProfileComponent,
    NewtaskComponent,
    TaskeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,FormsModule,
    HttpClientModule
  ],
  providers: [TaskserviceService,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
