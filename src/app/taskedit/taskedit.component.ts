import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskserviceService } from '../taskservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {
  task:any;
  tokenTask:any;
  user:any;
  token:any;
  taskDetails:any={};
  taskUpdated:any;
  message:any;
  /*taskDetails = { taskName : '',taskDate :'',taskTime: '',taskPriority:'',taskCategory:'',
                    taskStatus:'',taskRemainder:'' ,taskDescription :'',user:{emailId: 'lokendramalav1999@gmail.com'}};*/
  constructor(private formBuilder: FormBuilder,public restApi:TaskserviceService,private userService : UserserviceService,public router:Router) { }

  ngOnInit(): void {
    this.taskUpdated=new Task();
    this.tokenTask=this.restApi.getTokenTask();
    this.task = JSON.parse(this.tokenTask);

    this.token=this.userService.getToken();
    this.user = JSON.parse(this.token);
    //this.taskUpdated=this.task;
    
    this.taskUpdated.taskId=this.task.taskId;
    this.taskUpdated.taskName=this.task.taskName;
    this.taskUpdated.taskDate=this.task.taskDate;
    this.taskUpdated.taskTime=this.task.taskTime;
    this.taskUpdated.taskPriority=this.task.taskPriority;
    this.taskUpdated.taskCategory=this.task.taskCategory;
    this.taskUpdated.taskStatus=this.task.taskStatus;
    this.taskUpdated.taskDescription=this.task.taskDescription;
    this.taskUpdated.taskLabel=this.task.taskLabel;
    this.taskUpdated.taskRemainder=this.task.taskRemainder;
    this.taskUpdated.user=this.user;
    console.log(this.task);
    //console.log(this.tokenTask);
    console.log(this.taskUpdated);
    
  }

  updateTask(){
    console.log(this.taskUpdated);
    this.restApi.updateTask(this.taskUpdated).subscribe((data) => {
      this.message=data;
      
      console.log("in edittask:");
      console.log(this.taskUpdated);
      this.restApi.logoutTask();
      this.router.navigate(['/home/task-list']);
    },error=>{console.log(error); 
    alert("cant update")});
  }
}
