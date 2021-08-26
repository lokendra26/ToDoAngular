import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskserviceService } from '../taskservice.service';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  userdemo:any;
  token:any;
  final=new Users();
  tasks:any;
  userData:any;
  userObject:any;
  taskDetails:any;

  Id:any;
  message:any;
  /*@Input('emailIdLogin')
  emailIdFromLogin:any;

  get sharedMail():any{
    return this.userService.sharedMail;
  }
  emailId : any;*/
  //emailId=this.aroute.snapshot.params['emailId'];
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: TaskserviceService,
    private userService : UserserviceService
  ) { }

  ngOnInit(): void {
    this.token=this.userService.getToken();

    this.userdemo = JSON.parse(this.token);
    this.userObject=this.userdemo;
    this.taskDetails = {user:this.userObject};
    console.log(this.userdemo);
    this.final.emailId=this.userdemo.emailId;
    this.final.password=this.userdemo.password;
    this.final.userName=this.userdemo.userName;
    this.final.phoneNumber=this.userdemo.phoneNumber;
    this.getAllTasksOfAUser();
    /*this.emailId=this.sharedMail();
    this.restApi.getTaskById(this.emailId).subscribe((data)=>(this.userData=data));
    this.getAllTasksOfAUser();
    console.log("emailId" + this.emailId+"--SharedMail "+this.sharedMail())*/
   //this.getTask();
  }

  /*getTask(){
    return this.restApi.getAllTasks().subscribe((data)=>(this.tasks=data));
  }*/
  getAllTasksOfAUser(){

    console.log(this.final);
    return this.restApi.getAllTasksOfAUser(this.final).subscribe((data)=>{(this.tasks=data);
      console.log("In getTaskkof task: "+this.tasks);});
    
  }
  deleteTask(task:any){
    console.log(task);
   return this.restApi.deleteTask(task).subscribe((data)=>{this.getAllTasksOfAUser();
    });
  }

  editTask(task:any){
    console.log(task);
    this.restApi.loginTask(task);
    window.location.href="/home/taskedit";
  }

}
