import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I15Component } from './i15.component';

describe('I15Component', () => {
  let component: I15Component;
  let fixture: ComponentFixture<I15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
