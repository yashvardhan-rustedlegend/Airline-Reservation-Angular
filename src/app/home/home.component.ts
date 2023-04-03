import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images=[
    {title:'kaju katli',short:" kaju katli descriptioon",src: "../assets/Crousal-1.jpg"},
    {title:'Rasgula',short:" Rasgula description",src: "../assets/Crousal-2.jpg"},
    {title:'Rasgula',short:" Rasgula description",src: "../assets/Crousal-3.jpg"}
  ]

}
