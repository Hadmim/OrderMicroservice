import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReservedComponent } from './order-reserved.component';

describe('OrderReservedComponent', () => {
  let component: OrderReservedComponent;
  let fixture: ComponentFixture<OrderReservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
