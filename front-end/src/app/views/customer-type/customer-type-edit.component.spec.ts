import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypeEditComponent } from './customer-type-edit.component';

describe('CustomerTypeEditComponent', () => {
  let component: CustomerTypeEditComponent;
  let fixture: ComponentFixture<CustomerTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
