import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Im1Component } from './im1.component';

describe('Im1Component', () => {
  let component: Im1Component;
  let fixture: ComponentFixture<Im1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Im1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Im1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
