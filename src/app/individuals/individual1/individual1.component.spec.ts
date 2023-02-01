import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Individual1Component } from './individual1.component';

describe('Individual1Component', () => {
  let component: Individual1Component;
  let fixture: ComponentFixture<Individual1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Individual1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Individual1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
