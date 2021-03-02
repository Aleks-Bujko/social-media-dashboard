import { Component, OnInit } from '@angular/core';
import { SocialMediaDetail } from '../mock-kpis';

@Component({
  selector: 'app-heading-area',
  templateUrl: './heading-area.component.html',
  styleUrls: ['./heading-area.component.sass']
})
export class HeadingAreaComponent implements OnInit {

  socialMediaChannels = SocialMediaDetail;
  
  constructor () {}

  ngOnInit(): void {
  }

}
