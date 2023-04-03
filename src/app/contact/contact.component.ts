import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private restService : RestService , private router: Router) {}

  ContactStatus!: string;
  email!: string;
  name!: string;
  subject!: string;
  message!: string;

  contactObj = {
    name: this.name,
    email: this.email,
    subject: this.subject,
    message: this.message

  }

  query(){
    if(this.ContactStatus === "true"){
      alert("Your Query Has Been sent Successfully");
      this.router.navigate(['/']);
    }
    this.restService.contact(this.contactObj).subscribe({
      next : (data : string) => this.ContactStatus= data,
      error : (err) => console.log(err)
    })
  }

}
