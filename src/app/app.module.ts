import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchScoreModule } from 'src/matchscore/matchscore.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { PlayerService } from './Service/player.service';
import { DemoComp } from './democomp/democomp.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComp
    
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
