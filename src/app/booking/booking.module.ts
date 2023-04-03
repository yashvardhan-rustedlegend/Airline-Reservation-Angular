import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseComponent } from './choose/choose.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PayComponent } from './pay/pay.component';




@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    ChooseComponent,
    CustomerDetailsComponent,
    PayComponent,
  
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BookingModule { }
 