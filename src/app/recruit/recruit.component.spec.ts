import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitComponent } from './recruit.component';

describe('RecruitComponent', () => {
  let component: RecruitComponent;
  let fixture: ComponentFixture<RecruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
