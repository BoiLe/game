import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLastestComponent } from './report-lastest.component';

describe('ReportLastestComponent', () => {
  let component: ReportLastestComponent;
  let fixture: ComponentFixture<ReportLastestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLastestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
