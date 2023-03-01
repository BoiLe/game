import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'tmt-ghub-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  question: TDSSafeAny[] = [1]
  constructor() { }

  ngOnInit(): void {
  }

}
