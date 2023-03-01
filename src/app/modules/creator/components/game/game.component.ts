import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tmt-ghub-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() image: string = "";
  @Input() name: string = "";
  @Input() nameGame: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
