import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tmt-ghub-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss'],
  host: { class: "w-full" }
})
export class GameDisplayComponent implements OnInit {

  lstUser = [
    {
      id: 1, name: "Bội Lê", img: '../assets/images/home/gold-class.svg',
    },
    {
      id: 2, name: "Bội Lê", img: '../assets/images/home/silve-class.svg'
    },
    {
      id: 3, name: "Bội Lê", img: '../assets/images/home/bronze-class.svg'
    },
    {
      id: 1, name: "Bội Lê", img: '../assets/images/home/gold-class.svg',
    },
    {
      id: 2, name: "Bội Lê", img: '../assets/images/home/silve-class.svg'
    },
    {
      id: 3, name: "Bội Lê", img: '../assets/images/home/bronze-class.svg'
    },
    {
      id: 1, name: "Bội Lê", img: '../assets/images/home/gold-class.svg',
    },
    {
      id: 2, name: "Bội Lê", img: '../assets/images/home/silve-class.svg'
    },
    {
      id: 3, name: "Bội Lê", img: '../assets/images/home/bronze-class.svg'
    },
    {
      id: 1, name: "Bội Lê", img: '../assets/images/home/gold-class.svg',
    },
    {
      id: 2, name: "Bội Lê", img: '../assets/images/home/silve-class.svg'
    },
    {
      id: 3, name: "Bội Lê", img: '../assets/images/home/bronze-class.svg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
