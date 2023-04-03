import { Injectable} from "@angular/core";

export class Passangerdetails { //class file

    flightnumber! : string;
    destination! : string;
    flightName!: string;
    landingTime! : string;
    source!:string;
    takeOfTime!:string;
    price!:number;
    email!:string;
    name!:string;
    dateofbirth!:string;
    address!:string;
    
    constructor(flightnumber:string,name:string, destination:string, flightname :string, landingtime:string,source:string,takeoftime:string,email:string,price:number,dateofbirth:string,address:string){
            this.flightnumber=flightnumber;
            this.destination=destination;
            this.flightName=flightname;
            this.landingTime=landingtime;
            this.source=source;
            this.takeOfTime=takeoftime;
            this.email=email;
            this.price=price;
            this.name=name;
            this.dateofbirth=dateofbirth;
            this.address=address;
    }
}

