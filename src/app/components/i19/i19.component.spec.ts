import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I19Component } from './i19.component';

describe('I19Component', () => {
  let component: I19Component;
  let fixture: ComponentFixture<I19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
