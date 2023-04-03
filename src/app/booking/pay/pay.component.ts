import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/checkout.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  //right now this portal is in testing phase only
  //card number -- 4242 4242 4242 4242
  //exp date -- 02/25
  //cvv -- 123
  
  title="sample app"
  paymentHandler: any = null;
 
  success: boolean = false
  
  failure:boolean = false
 
  constructor(private checkout: CheckoutService, private router: Router ) {}
 
  ngOnInit() {
    this.invokeStripe();
  }
 
  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MsXh2SDr2mxxuHCt5dZay9UbrCdBgLwesjD3ga27slsTLmsZJ41jLmPzn2Oq69FUhFimnYcleA1v2nIWJXerb5z00VfPb6i05',
      locale: 'auto',
      token: function (stripeToken: any) {
        alert("Your Flight Has Been Booked");
        this.router.navigate(['choose']);
        paymentstripe(stripeToken);
      },
    });
 
    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
          alert("Your Flight has Been Booked");
          this.router.navigate(['choose']);
        }
        else {
          this.failure = true
          alert("Your Flight has been Booked");
          this.router.navigate(['choose']);
        }
      });
    };
 
    paymentHandler.open({
      name: 'Wissen Airline',
      description: 'This is a sample payment Portal',
      amount: amount * 100,
    });
  }
 
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MsXh2SDr2mxxuHCt5dZay9UbrCdBgLwesjD3ga27slsTLmsZJ41jLmPzn2Oq69FUhFimnYcleA1v2nIWJXerb5z00VfPb6i05',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }
  }
}
