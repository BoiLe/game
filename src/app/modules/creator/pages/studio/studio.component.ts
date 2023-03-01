import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { ModalAcceptCreateGameComponent } from '../../components/modal-accept-create-game/modal-accept-create-game.component';
import { ModalAddMediaComponent } from '../../components/modal-add-media/modal-add-media.component';
import { SettingComponent } from '../../components/setting/setting.component';

@Component({
  selector: 'tmt-ghub-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss'],
  host: { class: "flex flex-col overflow-hidden w-full h-full" },
})
export class StudioComponent implements OnInit {

  constructor(
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  lstQuestion: number[] = [];
  number:number = 0;
  ngOnInit(): void {
  }

  createGame() {
    const modal = this.modalService.create({
      title: "",
      // size: undefined,
      width: 768,
      content: ModalAcceptCreateGameComponent,
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
  }

  addMedia() {
    const modal = this.modalService.create({
      title: "",
      footer: null,
      size: "xl",
      content: ModalAddMediaComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
      bodyStyle:  {'padding' : '0'}
    });
  }
  handleSetting() {
    const modal = this.modalService.create({
      title: "Cài đặt",
      size: "md",
      footer: null,
      content: SettingComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
      className: 'font-Montserrat'
    });
  }

  addQuestion() {
    this.lstQuestion.push(this.number);
    this.number++;
  }
}
