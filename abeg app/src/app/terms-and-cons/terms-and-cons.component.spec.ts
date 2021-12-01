import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConsComponent } from './terms-and-cons.component';

describe('TermsAndConsComponent', () => {
  let component: TermsAndConsComponent;
  let fixture: ComponentFixture<TermsAndConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
