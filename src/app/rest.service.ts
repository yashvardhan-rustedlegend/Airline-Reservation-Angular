import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  strUrl: string = "http://localhost:9001/airline";
  strUrl2: string = "http://localhost:9001/booking";
  strUrl3: string = "http://localhost:9002/flight";
  

  //login
  login(loginObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };

    const body = JSON.stringify(loginObj)
    return this.http.post(this.strUrl + '/login',body, { 'headers': headers, 'responseType': 'text' })
  }
  //signup
  signUp(SignupObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
  
    const body = JSON.stringify(SignupObj)
    return this.http.post(this.strUrl + '/signup',body, { 'headers': headers, 'responseType': 'text' })
  }
  //submit customer details
  submit(customerObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
  
    const body = JSON.stringify(customerObj)
    return this.http.post(this.strUrl + '/submit',body, { 'headers': headers, 'responseType': 'text' })
  }
  //search flight details
  searchf(flightObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
  
    const body = JSON.stringify(flightObj)
    return this.http.post(this.strUrl3 + '/searchflight',body, { 'headers': headers, 'responseType': 'json' })
  }
  //book ticket
  bass(passenger: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
  
    const body = JSON.stringify(passenger)
    return this.http.post(this.strUrl2 + '/bookingticket',body, { 'headers': headers, 'responseType': 'text' })
  }
  //if the customer wants to send a query
  contact(contactObj: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
  
    const body = JSON.stringify(contactObj)
    return this.http.post(this.strUrl + '/contact',body, { 'headers': headers, 'responseType': 'text' })
  }
}



