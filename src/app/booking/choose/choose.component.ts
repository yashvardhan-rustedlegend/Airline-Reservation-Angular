import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Flightdetails } from 'src/app/flightdetails';
import {ActivatedRoute, Router} from '@angular/router';
import { Passangerdetails } from 'src/app/passangerdetails';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  constructor(private restServices: RestService, private router: Router){}
  bookStatus: boolean= false;
  destination!: string;
  source!:string;

  flightObj={
    destination:this.destination,
    source:this.source
  }

  
 passenger: Passangerdetails = {
   flightnumber: '',
   destination: '',
   flightName: '',
   landingTime: '',
   source: '',
   takeOfTime: '',
   price: 0,
   email: '',
   name: '',
   dateofbirth: '',
   address: ''
 };
  choose:boolean=true;
  confirm:boolean=false;
  flightData:Flightdetails[]=[];
  final:boolean=false;

  search() {    // Searching For Source and Destination
    if (this.bookStatus==false) {
    this.restServices.searchf(this.flightObj).subscribe({
      next: (data:Flightdetails[]) => this.flightData = data,
      error: (err: any) => console.log(err)
    })
      if(this.flightData.length===0){
        alert("No record found");        
      }
      else{
        this.bookStatus=true;
        this.choose=false;
      }
    }
    else {
      console.log("Please choose")
    }
  }

  book(fly : Flightdetails)//sending flight details
  {   
      this.confirm=true;
      this.bookStatus=false;
      this.choose=false;
    
      this.passenger.flightnumber=fly.flightnumber;
      this.passenger.destination=fly.destination;
      this.passenger.flightName=fly.flightName;
      this.passenger.landingTime=fly.landingTime;
      this.passenger.source=fly.source;
      this.passenger.takeOfTime=fly.takeOfTime;
  }

  submit(passenger : Passangerdetails){ //sending passenger details for booking
    
      this.restServices.bass(this.passenger).subscribe({
        next: (data) => console.log(data), 
        error: (err: any) => console.log(err)
      })
      this.router.navigate(['pay']);
   
   
  }

 /* hello() for testing purpose
  {
    this.bookStatus=false;
    this.choose=false;
    this.confirm=true;
  }*/

}