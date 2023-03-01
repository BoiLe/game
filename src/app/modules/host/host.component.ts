import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tmt-ghub-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  host: { class: "w-full" }
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
