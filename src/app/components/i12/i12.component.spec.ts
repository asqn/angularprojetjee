import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I12Component } from './i12.component';

describe('I12Component', () => {
  let component: I12Component;
  let fixture: ComponentFixture<I12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
