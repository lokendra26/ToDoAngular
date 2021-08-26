import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskserviceService } from '../taskservice.service';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  userdemo:any;
  token:any;
  taskDetails:any;

  userObject:any;
    
   constructor(private formBuilder: FormBuilder,public restApi:TaskserviceService,private userService:UserserviceService,public router:Router) { }

  ngOnInit(): void {
    this.token=this.userService.getToken();

    this.userdemo = JSON.parse(this.token);

    this.userObject=this.userdemo;
    this.taskDetails = { taskName : '',taskDate :'',taskTime: '',taskPriority:'',taskCategory:'',
                      taskStatus:'',taskRemainder:'' ,taskDescription :'',user:this.userObject};
  }

  addTask()
  {
    this.restApi.createTask(this.taskDetails).subscribe((data:{})=>{
      this.router.navigate(['/home/task-list']);
    });
  }
}