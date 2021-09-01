import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductPayComponent } from './e-product-pay.component';

describe('EProductPayComponent', () => {
  let component: EProductPayComponent;
  let fixture: ComponentFixture<EProductPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EProductPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EProductPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
