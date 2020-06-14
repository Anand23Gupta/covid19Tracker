import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carddashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

  @Input('cardheader') cardheader;
  @Input('cardvalue') cardvalue;

  constructor() { }

  ngOnInit(): void {
  }

}
