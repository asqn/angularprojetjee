import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I9Component } from './i9.component';

describe('I9Component', () => {
  let component: I9Component;
  let fixture: ComponentFixture<I9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
