import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'tmt-ghub-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  isAnswser = false
  answsers: TDSSafeAny[] = [
    {id:0, color: 'text-white bg-primary-1'},
    {id:1, color: 'text-white bg-secondary-1'},
    {id:2, color: 'text-white bg-success-400'},
    {id:3, color: 'text-white bg-warning-400'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  activeAnswser(e: boolean, i:number) {
    if(e) {
      this.answsers.filter(item => item.id !== i).map(item => (item.color = 'text-black'));
      this.isAnswser = e;
    }
  }
}
