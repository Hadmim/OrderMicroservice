import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentMethod } from '@shared/domain/enums/payment.method';
@Component({
  selector: 'app-payment-method',
  templateUrl: './payment.method.component.html',
  styleUrls: [
    '../../payment.page.component.css',
    './payment.method.component.css',
  ],
})
export class PaymentMethodComponent implements OnInit {
  paymentMethod: PaymentMethod = PaymentMethod.notSelected;
  @Output() changePaymentMethodEvent = new EventEmitter<PaymentMethod>();
  constructor() {}

  ngOnInit(): void {}
  changePaymentMethod(paymnetMethod: string) {
    switch (paymnetMethod) {
      case 'virement':

        this.paymentMethod = PaymentMethod.virement;
        this.changePaymentMethodEvent.emit(PaymentMethod.virement);
        break;
      case 'dahabia':
        this.paymentMethod = PaymentMethod.dahabia;
        this.changePaymentMethodEvent.emit(PaymentMethod.dahabia);
        break;
      case 'bancaire':
        this.paymentMethod = PaymentMethod.bancaire;
        this.changePaymentMethodEvent.emit(PaymentMethod.bancaire);
        break;
      case 'notSelected':
        this.paymentMethod = PaymentMethod.notSelected;
        this.changePaymentMethodEvent.emit(PaymentMethod.notSelected);
        break;
    }
  }
}
