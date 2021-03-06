import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialMediaKpiComponent } from './social-media-kpi/social-media-kpi.component';
import { SocialMediaChannelComponent } from './social-media-channel/social-media-channel.component';
import { HeadingAreaComponent } from './heading-area/heading-area.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaKpiComponent,
    SocialMediaChannelComponent,
    HeadingAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
