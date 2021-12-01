import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingMainAccountComponent } from './funding-main-account.component';

describe('FundingMainAccountComponent', () => {
  let component: FundingMainAccountComponent;
  let fixture: ComponentFixture<FundingMainAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingMainAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingMainAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
