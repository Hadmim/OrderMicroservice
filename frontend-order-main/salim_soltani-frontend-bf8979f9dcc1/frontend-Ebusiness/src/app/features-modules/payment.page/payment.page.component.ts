import { Component, OnInit} from '@angular/core';
import { PaymentMethod } from '@shared/domain/enums/payment.method';



@Component({
  selector: 'app-payment-page',
  templateUrl:'./payment.page.component.html',
  styleUrls:['./payment.page.component.css']
})
export class PaymentPageComponent implements OnInit {
  paymentMethod=PaymentMethod.virement;
  constructor() { }
  ngOnInit(): void {
  }
 title = 'app';
  typeAchteur='personne';
  //typeAchteur='enterprise';
 transaction:boolean=false;
 payer(){
 this.transaction=true;
 if(this.transaction){
   (document.getElementById('paye')as any).style.background="#838aad";
   (document.getElementById('paye')as any).style.border="#838aad";
 }
 }
 changePaymentMethod(paymentMethod: PaymentMethod){
   this.paymentMethod=paymentMethod;
   console.log(this.paymentMethod)

 }
}

