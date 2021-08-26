import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  @Input()
  userDetails={emailId:'demo@gmail.com',userName:'',password:'',phoneNumber:''};
  

  constructor(public restApi:UserserviceService,private formBuilder: FormBuilder,public router:Router) { }



  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      emailId: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  addUser(){
    this.restApi.createUser(this.userDetails).subscribe((data:{})=>{
      this.router.navigate(['/login']);
    });
  }
}
