import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanappComponent } from './loanapp.component';

describe('LoanappComponent', () => {
  let component: LoanappComponent;
  let fixture: ComponentFixture<LoanappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanappComponent]
    });
    fixture = TestBed.createComponent(LoanappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
