import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeOrderComponent } from './paye-order.component';

describe('PayeOrderComponent', () => {
  let component: PayeOrderComponent;
  let fixture: ComponentFixture<PayeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
