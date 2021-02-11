import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaKpiComponent } from './social-media-kpi.component';

describe('SocialMediaKpiComponent', () => {
  let component: SocialMediaKpiComponent;
  let fixture: ComponentFixture<SocialMediaKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
