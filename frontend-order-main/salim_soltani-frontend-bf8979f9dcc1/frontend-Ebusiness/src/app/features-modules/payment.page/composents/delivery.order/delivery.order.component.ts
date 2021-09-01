import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery.order.component.html',
  styleUrls: ['../../payment.page.component.css','./delivery.order.component.css',]
})
export class DeliveryOrderComponent implements OnInit {

  constructor() { }
  option='Laivraison à domicile';
  //option='Point de livraison';
  // option='Point de livraison chez le vendeur';
  ngOnInit(): void {
  }

}
