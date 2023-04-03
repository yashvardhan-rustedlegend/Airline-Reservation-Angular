import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  constructor(private restService : RestService , private router: Router) {}

  
  SigupStatus! : string;
  email! : string;
  password! : string;
  name! : string;
  phoneno! : number;

  SignupObj = {
    name     : this.name,
    phoneno  : this.phoneno,
    email : this.email,
    password : this.password
    
  }
  signUp(){
    this.restService.signUp(this.SignupObj).subscribe({
      next : (data : string) => this.SigupStatus= data,
      error : (err) => console.log(err)
    })
    if(this.SigupStatus === "true"){
      console.log(this.SigupStatus);
      this.router.navigate(['book/']);
    }
    else{
      console.log("Re-Enter Full Data")
    }
    
  }
  
}
