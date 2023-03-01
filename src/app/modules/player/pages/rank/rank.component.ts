import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tmt-ghub-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
  public innerWidth: any;
  constructor() { }

  ngOnInit(): void {
    console.log(window.innerWidth)
    this.innerWidth = window.innerWidth;
  }

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log(window.innerWidth)
}
}
