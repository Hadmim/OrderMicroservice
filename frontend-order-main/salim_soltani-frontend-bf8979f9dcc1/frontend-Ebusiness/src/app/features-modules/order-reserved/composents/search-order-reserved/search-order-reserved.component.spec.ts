import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrderReservedComponent } from './search-order-reserved.component';

describe('SearchOrderReservedComponent', () => {
  let component: SearchOrderReservedComponent;
  let fixture: ComponentFixture<SearchOrderReservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOrderReservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrderReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
