import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I11Component } from './i11.component';

describe('I11Component', () => {
  let component: I11Component;
  let fixture: ComponentFixture<I11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
