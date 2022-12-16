import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I14Component } from './i14.component';

describe('I14Component', () => {
  let component: I14Component;
  let fixture: ComponentFixture<I14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
