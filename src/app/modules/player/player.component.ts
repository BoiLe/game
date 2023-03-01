import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tmt-ghub-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  host: { class: "w-full" }
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
