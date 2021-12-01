import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrNumberComponent } from './registr-number.component';

describe('RegistrNumberComponent', () => {
  let component: RegistrNumberComponent;
  let fixture: ComponentFixture<RegistrNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
