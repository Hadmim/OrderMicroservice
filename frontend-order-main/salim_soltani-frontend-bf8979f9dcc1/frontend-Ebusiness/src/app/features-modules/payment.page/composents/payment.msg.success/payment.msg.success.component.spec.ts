import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMsgSuccessComponent } from './payment.msg.success.component';

describe('PaymentMsgSuccessComponent', () => {
  let component: PaymentMsgSuccessComponent;
  let fixture: ComponentFixture<PaymentMsgSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMsgSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMsgSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
