import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcceptCreateGameComponent } from './modal-accept-create-game.component';

describe('ModalAcceptCreateGameComponent', () => {
  let component: ModalAcceptCreateGameComponent;
  let fixture: ComponentFixture<ModalAcceptCreateGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcceptCreateGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcceptCreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
