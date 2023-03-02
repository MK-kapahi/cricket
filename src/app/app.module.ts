import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchScoreModule } from 'src/matchscore/matchscore.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { PlayerService } from './Service/player.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatchScoreModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
