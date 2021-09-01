import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaymentPageComponent } from './payment.page.component';
import { CompanyInformationComponent } from './composents/company.information/company.information.component';
import { PersonInformationComponent } from './composents/person.information/person.information.component';
import { PaymentMethodComponent } from './composents/payment.method/payment.method.component';
import { MethodDahabiaomponent } from './composents/method.dahabia/method.dahabia.component';
import { MethodVirementComponent } from './composents/method.virement/method.virement.component';
import { MethodBancaireComponent } from './composents/method-bancaire/method.bancaire.component';
import { PaymentMsgErrorComponent } from './composents/payment.msg.error/payment.msg.error.component';
import { PaymentMsgSuccessComponent } from './composents/payment.msg.success/payment.msg.success.component';
import { DeliveryOrderComponent } from './composents/delivery.order/delivery.order.component';
import { MaterialModule } from '@shared/modules/material-module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PaymentPageComponent,
    CompanyInformationComponent,
    PersonInformationComponent,
    PaymentMethodComponent,
    MethodDahabiaomponent,
    MethodVirementComponent,
    MethodBancaireComponent,
    PaymentMsgErrorComponent,
    PaymentMsgSuccessComponent,
    DeliveryOrderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule,
    PaymentPageComponent,
    CompanyInformationComponent,
    PersonInformationComponent,
    PaymentMethodComponent,
    MethodDahabiaomponent,
    MethodVirementComponent,
    MethodBancaireComponent,
    PaymentMsgErrorComponent,
    PaymentMsgSuccessComponent,
    DeliveryOrderComponent],
  providers: [],
})
export class PaymentPageModule { }
