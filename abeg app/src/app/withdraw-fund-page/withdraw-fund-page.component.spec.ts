import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawFundPageComponent } from './withdraw-fund-page.component';

describe('WithdrawFundPageComponent', () => {
  let component: WithdrawFundPageComponent;
  let fixture: ComponentFixture<WithdrawFundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawFundPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawFundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
