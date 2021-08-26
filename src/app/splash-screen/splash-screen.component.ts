
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.css"]
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string | undefined;
  showSplash = true;

  constructor(public router:Router){}
  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";
      this.navigateToLogin();
      setTimeout(() => {
        this.showSplash = !this.showSplash;

      }, 500);
    }, 3000);
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
