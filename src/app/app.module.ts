import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FloDashModule} from "@flosportsinc/ng-media-source-extensions/dash";
import {FloMseModule} from "@flosportsinc/ng-media-source-extensions";
import {FloHlsModule} from "@flosportsinc/ng-media-source-extensions/hls";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FloDashModule,
    FloMseModule,
    FloHlsModule, // without config overrides
    FloHlsModule.config({
      // floConfig: {
      //   selfHeal: true // attempts to fix errors automatically
      // },
      hlsConfig: {
        capLevelToPlayerSize: true, // this module defaults to responsive renditions
        startLevel: -1 // this module defaults to auto start leveling
      } // See: https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
