import { Injectable} from "@angular/core";
export class Flightdetails { // class file

    flightnumber! : string;
    destination! : string;
    flightName!: string;
    landingTime! : string;
    source!:string;
    takeOfTime!:string;
    price!:number;

    constructor(flightnumber:string, destination:string, flightName :string, landingTime:string,source:string,takeOfTime:string,price:number){
            this.flightnumber=flightnumber;
            this.destination=destination;
            this.flightName=flightName;
            this.landingTime=landingTime;
            this.source=source;
            this.takeOfTime=takeOfTime;
            this.price=price;
    }
}

