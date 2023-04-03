import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  constructor(private restService: RestService, private router: Router) { }

  Status!: string;
  Firstname!: string;
  Lastname!: string;
  DateOfBirth!: string;
  Address!: string;
  Country!: string;
  Code!: string;
  PhoneNumber!: number;
  Email!: string;

  customerObj = {
    FirstName:    this.Firstname,
    LastName:     this.Lastname,
    DateOfBirth:  this.DateOfBirth,
    Address:      this.Address,
    Country:      this.Country,
    Code:         this.Code,
    PhoneNumber : this.PhoneNumber,
    Email:        this.Email

  }
  submit() {

    this.restService.login(this.customerObj).subscribe({
      next: (data: string) => this.Status = data,
      error: (err) => console.log(err)
    })
    if (this.Status === "true") {
      console.log(this.Status);
      this.router.navigate(['choose']);
    }
    else {
      console.log("Re-Enter Full Data")
    }
  }

}
