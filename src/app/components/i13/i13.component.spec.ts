import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I13Component } from './i13.component';

describe('I13Component', () => {
  let component: I13Component;
  let fixture: ComponentFixture<I13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
