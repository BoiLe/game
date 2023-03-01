import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddMediaComponent } from './modal-add-media.component';

describe('ModalAddMediaComponent', () => {
  let component: ModalAddMediaComponent;
  let fixture: ComponentFixture<ModalAddMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
