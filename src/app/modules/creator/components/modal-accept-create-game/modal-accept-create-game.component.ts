import { Component, OnInit } from '@angular/core';
import { TDSModalRef } from 'tds-ui/modal';

@Component({
  selector: 'tmt-ghub-modal-accept-create-game',
  templateUrl: './modal-accept-create-game.component.html',
  styleUrls: ['./modal-accept-create-game.component.scss']
})
export class ModalAcceptCreateGameComponent implements OnInit {

  constructor(private modalRef: TDSModalRef) { }

  ngOnInit(): void {
  }

  cancel() {
    this.modalRef.destroy()
  }
}
