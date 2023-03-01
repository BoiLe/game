import { Component, Input, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'tmt-ghub-report-lastest',
  templateUrl: './report-lastest.component.html',
  styleUrls: ['./report-lastest.component.scss']
})
export class ReportLastestComponent implements OnInit {

  @Input() visible?:boolean =false;
  @Input() image: string = "";
  @Input() users: number = 0;
  @Input() lstUser: {id: number, img: string, class: number}[] = [];
  @Input() name: string = "";
  @Input() setDay: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  change(e:TDSSafeAny) {
    console.log(e)
  }

  close() {
    this.visible = false;
  }
}
