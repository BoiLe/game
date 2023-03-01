import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tmt-ghub-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() numberQuestion: number = 0;
  @Output() event = new EventEmitter<void>();
  @Output() settingEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  addMedia() {
    this.event.emit();
  }

  settingMedia() {
    this.settingEvent.emit();
  }
}
