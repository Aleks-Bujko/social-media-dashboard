import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialMediaKpiComponent } from './social-media-kpi/social-media-kpi.component';
import { SocialMediaChannelComponent } from './social-media-channel/social-media-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaKpiComponent,
    SocialMediaChannelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
