import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private restService : RestService, private router: Router) {}

  loginStatus! : string;
  email! : string;
  password! : string;
  name! :string;
  phoneno!:number;
  loginObj = {
    email : this.email,
    password : this.password
    // name : "SURAJ",
    // phoneno: 1244



  }
  logins(){

    this.restService.login(this.loginObj).subscribe({
      next : (data : string) => this.loginStatus = data,
      error : (err) => console.log(err)
    })
    // console.log(this.loginStatus);
    if(this.loginStatus === "true"){
      // console.log(this.loginStatus);
      this.router.navigate(['choose']);
    }
    else{
      console.log("Re-Enter Full Data")
    }
  }

}
