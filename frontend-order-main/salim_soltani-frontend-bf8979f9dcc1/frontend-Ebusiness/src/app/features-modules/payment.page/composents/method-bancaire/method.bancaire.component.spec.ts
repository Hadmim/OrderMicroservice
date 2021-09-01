import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodBancaireComponent } from './method.bancaire.component';

describe('MethodBancaireComponent', () => {
  let component: MethodBancaireComponent;
  let fixture: ComponentFixture<MethodBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
