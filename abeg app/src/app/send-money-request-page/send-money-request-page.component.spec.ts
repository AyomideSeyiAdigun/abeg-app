import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMoneyRequestPageComponent } from './send-money-request-page.component';

describe('SendMoneyRequestPageComponent', () => {
  let component: SendMoneyRequestPageComponent;
  let fixture: ComponentFixture<SendMoneyRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMoneyRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMoneyRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
