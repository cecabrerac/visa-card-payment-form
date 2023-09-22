import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVisaComponent } from './payment-visa.component';

describe('PaymentVisaComponent', () => {
  let component: PaymentVisaComponent;
  let fixture: ComponentFixture<PaymentVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
