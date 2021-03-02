import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingAreaComponent } from './heading-area.component';

describe('HeadingAreaComponent', () => {
  let component: HeadingAreaComponent;
  let fixture: ComponentFixture<HeadingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
