import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMsgErrorComponent } from './payment.msg.error.component';

describe('PaymentMsgErrorComponent', () => {
  let component: PaymentMsgErrorComponent;
  let fixture: ComponentFixture<PaymentMsgErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMsgErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMsgErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
