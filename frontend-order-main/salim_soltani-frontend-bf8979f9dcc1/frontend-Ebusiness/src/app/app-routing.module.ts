/** Angular core dependencies */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EProductPayComponent } from './features-modules/e-product-pay/e-product-pay.component';
import { OrderReservedComponent } from './features-modules/order-reserved/order-reserved.component';
import { OrderPageComponent } from './features-modules/order.page/order.page.component';
import { PaymentPageComponent } from './features-modules/payment.page/payment.page.component';
const routes: Routes = [
  {
    path: 'ProductPay',
    component: EProductPayComponent,
  },

  {
    path: '',
    component: OrderPageComponent,
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
