import { Component, OnInit } from '@angular/core';
import { SocialMediaDetail } from '../mock-kpis';

@Component({
  selector: 'app-social-media-channel',
  templateUrl: './social-media-channel.component.html',
  styleUrls: ['./social-media-channel.component.sass']
})
export class SocialMediaChannelComponent implements OnInit {

  socialMediaChannels = SocialMediaDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
