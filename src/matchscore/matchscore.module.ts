import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatchScoreComponent } from "./matchscore.component";

@NgModule({
    declarations :[MatchScoreComponent,],
    imports :[BrowserModule],
    providers :[],
    exports:[MatchScoreComponent]
})

export class MatchScoreModule{}