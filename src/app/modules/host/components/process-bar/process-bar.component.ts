import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tmt-ghub-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.scss']
})
export class ProcessBarComponent implements OnInit {

  @Input() value:number = 10
  constructor() { }

  ngOnInit(): void {
  }

}
