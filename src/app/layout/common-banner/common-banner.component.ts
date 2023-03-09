import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.css']
})
export class CommonBannerComponent implements OnInit {


  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
