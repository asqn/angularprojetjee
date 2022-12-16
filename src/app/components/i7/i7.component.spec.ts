import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I7Component } from './i7.component';

describe('I7Component', () => {
  let component: I7Component;
  let fixture: ComponentFixture<I7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
