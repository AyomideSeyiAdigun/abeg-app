import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferrequestPageComponent } from './transferrequest-page.component';

describe('TransferrequestPageComponent', () => {
  let component: TransferrequestPageComponent;
  let fixture: ComponentFixture<TransferrequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferrequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferrequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
