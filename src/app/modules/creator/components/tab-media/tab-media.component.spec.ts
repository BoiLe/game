import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMediaComponent } from './tab-media.component';

describe('TabMediaComponent', () => {
  let component: TabMediaComponent;
  let fixture: ComponentFixture<TabMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
