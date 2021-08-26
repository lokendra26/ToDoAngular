import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  token:any;
  userUpdated:any;
  message:any;
  constructor(private formBuilder: FormBuilder,private userService : UserserviceService) { }

  ngOnInit(): void {
    this.userUpdated=new Users();
    this.token=this.userService.getToken();

    this.user = JSON.parse(this.token);
    this.userUpdated.emailId=this.user.emailId;
    this.userUpdated.userName=this.user.userName;
    this.userUpdated.password=this.user.password;
    this.userUpdated.phoneNumber=this.user.phoneNumber;
    console.log(this.user);
  }

  onSubmit(){
    
    this.userService.updateUser(this.userUpdated).subscribe((data)=>{
      this.message=data;
      console.log(this.userUpdated);
      this.userService.logoutUser();
      this.userService.loginUser(this.userUpdated);
      //this.userService.loginUser(this.message);
      window.location.href="/home/task-list";
      console.log("successfully updated ...");
      console.log(this.message);
    },error=>{console.log(error)});
  }

}
