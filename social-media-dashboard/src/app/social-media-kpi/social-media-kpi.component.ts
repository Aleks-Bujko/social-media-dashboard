import { Component, OnInit } from '@angular/core';
import { SocialMediaDetail } from '../mock-kpis';

@Component({
  selector: 'app-social-media-kpi',
  templateUrl: './social-media-kpi.component.html',
  styleUrls: ['./social-media-kpi.component.sass']
})
export class SocialMediaKpiComponent implements OnInit {

  socialMediaChannels = SocialMediaDetail;


  constructor() { }

  ngOnInit(): void {
  }

}
