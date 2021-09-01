import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '@app/features-modules/order.page/composents/paye-order/services/order.service';
import { Order } from '@shared/entities/order';
import { order } from '@shared/services/dummydata';
import { Test } from '../../DTO/test';

@Component({
  selector: 'app-paye-order',
  templateUrl: './paye-order.component.html',
  styleUrls: ['./paye-order.component.scss']
})
export class PayeOrderComponent implements OnInit {

  constructor( private route:Router) { }
  
  id!:number
  val!:string
  test!:any
  shr:any
  Order!:Order

  ngOnInit(): void {
  this.Order=order


//this.testservice.findDelById().subscribe(
 // data => {
    // on cas return this.id=data;  this.test=data 


 // });
 //this.route.params.subscribe((params: Params) => this.myParam = params['caller']);


 //this.test = this.route.queryParams.subscribe(params => {
   // Defaults to 0 if no query param provided.
 //  this.shr = +params['request'] || 0;
// });


  }
    
    tva=1000;
    checks=false;
    Showtva(e :any) {
   
   if(e.target.checked==true){
     this.checks=true;
     (document.getElementById('tva')as any).style.display = "flex";
   }
   else{
     this.checks=false;
    (document.getElementById('tva')as any).style.display = "none";
   }
    }
}
