import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tmt-ghub-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input() color: string = ''
  @Input() isAnswser = false;
  @Output() activeAnswser = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  active() {
    if(!this.isAnswser){
      this.activeAnswser.emit(true)
    }
  }
}
