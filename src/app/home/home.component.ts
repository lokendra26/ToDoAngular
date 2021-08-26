import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public serviceId:any

  public services=[
    {id:1,name:'TaskList'},
    {id:2,name:'Profile'},
    {id:3,name:'NewTask'}
  ]
  emailId =this.aroute.snapshot.params['emailId'];
  constructor(public router: Router,private aroute: ActivatedRoute,private userService : UserserviceService) {} //Dependency Injection

  ngOnInit(): void {
    //this.openDefault(this.emailId);
  }

  /*openDefault(emailId:any){
    this.router.navigate(['task-list'],{ relativeTo: this.aroute });
  }*/

  onClick(service:any) {
    //this.router.navigate(['/home',service.id]);
    if(service.id==1)
    {
      this.router.navigate(['task-list'],{ relativeTo: this.aroute });
    } else if(service.id==2)
    {
      this.router.navigate(['profile'],{ relativeTo: this.aroute });
    } else if(service.id==3)
    {
      this.router.navigate(['newtask'],{ relativeTo: this.aroute });
    } 
    else {
      this.router.navigate(['task-list'],{ relativeTo: this.aroute });
    }
    
    
  }
  Logout(){
    this.userService.logoutUser();
    window.location.href="/login";
  }
}
