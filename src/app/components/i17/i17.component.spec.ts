import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I17Component } from './i17.component';

describe('I17Component', () => {
  let component: I17Component;
  let fixture: ComponentFixture<I17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
