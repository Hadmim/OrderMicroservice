import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodDahabiaomponent } from './method.dahabia.component';

describe('MethodDahabiaomponent', () => {
  let component: MethodDahabiaomponent;
  let fixture: ComponentFixture<MethodDahabiaomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodDahabiaomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodDahabiaomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
