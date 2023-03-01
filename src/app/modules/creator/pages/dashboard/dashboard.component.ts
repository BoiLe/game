import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'tmt-ghub-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: { class: "flex flex-col overflow-hidden w-full h-full" }
})
export class DashboardComponent implements OnInit {

  visible?: boolean;
  isClick = false;
  lstReport = [
    {
      name: "Trò chơi thứ nhất",
      image: "../assets/images/home/rubik.svg",
      users: 10,
      lstUser: [{
        id: 1, img: '../assets/images/home/gold-class.svg', class: 1
      },
      {
        id: 2, img: '../assets/images/home/silve-class.svg', class: 2
      },
      {
        id: 3, img: '../assets/images/home/bronze-class.svg', class: 3
      }
      ],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ hai",
      image: "../assets/images/home/victory.svg",
      users: 0,
      lstUser: [],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ ba",
      image: "../assets/images/home/rubik.svg",
      users: 10,
      lstUser: [],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/victory.svg",
      users: 0,
      lstUser: [],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/victory.svg",
      users: 0,
      lstUser: [],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/victory.svg",
      users: 0,
      lstUser: [],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/victory.svg",
      users: 0,
      lstUser: [],
      setDay: new Date()
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/victory.svg",
      users: 0,
      lstUser: [],
      setDay: new Date()
    }
  ]

  lstGame = [
    {
      name: "Trò chơi thứ nhất",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ hai",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ ba",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    },
    {
      name: "Trò chơi thứ tư",
      image: "../assets/images/home/game.png",
      nameGame: "Hai ba con mực",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  close(e: TDSSafeAny) {
    console.log(e)
  }

  change(value: boolean): void {
    console.log(value);
  }
}
