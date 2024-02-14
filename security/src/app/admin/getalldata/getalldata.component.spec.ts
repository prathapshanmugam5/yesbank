import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldataComponent } from './getalldata.component';

describe('GetalldataComponent', () => {
  let component: GetalldataComponent;
  let fixture: ComponentFixture<GetalldataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetalldataComponent]
    });
    fixture = TestBed.createComponent(GetalldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
