import { Component, OnInit } from '@angular/core';
import { SocialMediaDetail } from '../mock-kpis';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-heading-area',
  templateUrl: './heading-area.component.html',
  styleUrls: ['./heading-area.component.sass']
})
export class HeadingAreaComponent implements OnInit {

  socialMediaChannels = SocialMediaDetail;
  
  constructor (private themeService: ThemeService) {}

  ngOnInit(): void {
  }
/*
    toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
    }
  
*/
  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : 'light';
  }


}
