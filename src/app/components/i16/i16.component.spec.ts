import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I16Component } from './i16.component';

describe('I16Component', () => {
  let component: I16Component;
  let fixture: ComponentFixture<I16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
