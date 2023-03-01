import { Component, OnInit } from '@angular/core';
import { TDSModalRef } from 'tds-ui/modal';


@Component({
  selector: 'tmt-ghub-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  public data = [
    { id: 1, time: 10, point: 5 },
    { id: 2, time: 20, point: 6 },
    { id: 3, time: 30, point: 7 },
    { id: 4, time: 40, point: 8 },
    { id: 5, time: 50, point: 9 },
    { id: 6, time: 60, point: 10 },
  ]
  constructor(private modal: TDSModalRef) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.destroy();
  }

  save() {
  }
}
