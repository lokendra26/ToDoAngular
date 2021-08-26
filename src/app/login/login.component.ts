import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Users } from '../users';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:any;
  successMessage:string ="";
  user:any;
  flag:boolean = true
  
  //@Output() public emailId = new EventEmitter<any>();
  /*get sharedmail():string{
    return this.userService.sharedMail;
  }
  set sharedmail(emailId:any){
    this.userService.sharedMail=emailId;
  }
  emailId:any;*/
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,public router:Router, private userService:UserserviceService) { }

  ngOnInit(): void {
    this.user=new Users();
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(7)]]
    })
  }

  login(){
    this.successMessage="Successfully Loggined In..."
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }
  navigateToHome(){
   
    this.router.navigate(['/home']);
  }
  apply(value:string){
    this.flag = value == "login"?true : false;
  }

  onSubmit(){
    //alert("you are logged in....");
    this.userService.generateToken(this.user).subscribe((data)=>{
      this.message=data;
      this.userService.loginUser(this.message);
      window.location.href="/home/task-list";
      console.log("successfully logged in...");
      console.log(this.message);
    },error=>{console.log(error)});
  }
  
  

}