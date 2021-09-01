import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material-module';
import { OrderPageModule } from './order.page/order.page.module';
import {PaymentPageModule} from './payment.page/payment.page.module'
import {OrderReservedModule} from './order-reserved/order-reserved.module'
import { EProductPayModule } from './e-product-pay/e-product-pay.module';
@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    PaymentPageModule,
    OrderPageModule,
    OrderReservedModule,
    EProductPayModule
  ],
  exports:[
    MaterialModule,
    PaymentPageModule,
    OrderPageModule,
    OrderReservedModule,
    EProductPayModule
  ],
  providers: [],
})
export class FeaturesModule { }
