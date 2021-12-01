import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptMoneyComponent } from './accept-money.component';

describe('AcceptMoneyComponent', () => {
  let component: AcceptMoneyComponent;
  let fixture: ComponentFixture<AcceptMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
