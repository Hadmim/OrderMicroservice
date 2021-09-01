import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodVirementComponent } from './method.virement.component';

describe('MethodVirementComponent', () => {
  let component: MethodVirementComponent;
  let fixture: ComponentFixture<MethodVirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodVirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
