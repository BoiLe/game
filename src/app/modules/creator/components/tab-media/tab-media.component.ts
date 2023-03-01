import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSUploadFile } from 'tds-ui/upload/interface';
import { TDSUploadChangeParam } from 'tds-ui/upload/public-api';

@Component({
  selector: 'tmt-ghub-tab-media',
  templateUrl: './tab-media.component.html',
  styleUrls: ['./tab-media.component.scss'],
})
export class TabMediaComponent implements OnInit {

  @Input() name?: string
  @Input() visible?: boolean;
  fileList: TDSUploadFile[] = [
    {
      uid: "1",
      name: "dog.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "../assets/images/home/game.png",
    },
    {
      uid: "1",
      name: "dog.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "../assets/images/home/game.png",
    },
    {
      uid: "1",
      name: "dog.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "../assets/images/home/game.png",
    },
    {
      uid: "1",
      name: "dog.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "../assets/images/home/game.png",
    },
    {
      uid: "1",
      name: "dog.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "../assets/images/home/game.png",
    },
    {
      uid: "1",
      name: "dog.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "../assets/images/home/game.png",
    },
  ];
  constructor(private modal: TDSModalRef) { }

  ngOnInit(): void {
  }

  change(value: boolean): void {
    console.log(value);
  }

  close(): void {
    this.visible = false;
  }
  apply(): void {
    this.visible = false;
  }

  handleChange(info: TDSUploadChangeParam): void {
    console.log(info)
  }

  cancel() {
    this.modal.destroy()
  }
}
