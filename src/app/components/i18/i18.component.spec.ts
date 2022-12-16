import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18Component } from './i18.component';

describe('I18Component', () => {
  let component: I18Component;
  let fixture: ComponentFixture<I18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
