import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  full_name = "Sean";
  address = "Holbæk";

  constructor() { }

  ngOnInit() {
  }

}
