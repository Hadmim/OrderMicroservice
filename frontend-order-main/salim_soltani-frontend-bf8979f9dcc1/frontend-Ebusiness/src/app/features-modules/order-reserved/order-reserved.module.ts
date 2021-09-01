import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderReservedComponent } from './order-reserved.component';
import { SearchOrderReservedComponent } from './composents/search-order-reserved/search-order-reserved.component';



@NgModule({
  declarations: [
    OrderReservedComponent,
    SearchOrderReservedComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    OrderReservedComponent,
    SearchOrderReservedComponent
  ],
  providers:[]
})
export class OrderReservedModule { }
