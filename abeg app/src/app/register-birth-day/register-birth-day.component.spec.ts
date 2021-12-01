import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBirthDayComponent } from './register-birth-day.component';

describe('RegisterBirthDayComponent', () => {
  let component: RegisterBirthDayComponent;
  let fixture: ComponentFixture<RegisterBirthDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBirthDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBirthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
