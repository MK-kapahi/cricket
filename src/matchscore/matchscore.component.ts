import { Component, OnInit } from "@angular/core";
import { filter, map } from "rxjs";
import { Over } from "src/app/over";
import { PlayerService } from "src/app/Service/player.service";

@Component({
    selector :"app-matchscore",
    templateUrl : './matchscore.component.html',
    styleUrls :['./matchscore.component.css']
})

export class MatchScoreComponent implements OnInit{
    
    constructor(private service : PlayerService){}
    playerData:any=[]
    player :any={};
    player_data :any=[];
    player_list:any=[]

    bowler_list:any=[];
    ngOnInit(): void {
        this.service.getTeamPlayer().subscribe((res)=>{
            this.playerData=res;
           this.player_data=this.playerData['matches']
           console.log(this.player_data)
        })  
      }
    newOver = new Over() 
    currentscore:number=0;
    button_click=0;
    sendScore(event:any)
    {
       this.currentscore = Number(event.target.value);
       console.log(this.currentscore);
    }

    undoScore()
    {
    this.currentscore=0;
    console.log(this.currentscore);
    }

    noBall() {
     
    }
    wideBall() {

    }

    showdata()  
    {

    this.player= this.player_data.find(this.findTeam);
    this.player_list =this.player['team1_players'];

    this.bowler_list = this.player['team2_players']
    }

    findTeam (data :any) {
        return data.id === "64009d2255d815307289af55";
      }

      on_Strike_player1(event:any)
      {

         console.log(event.target.value);
      }

      on_Strike_player2(event:any)
      {

         console.log(event.target.value);
      }

      on_Strike_bowler(event:any)
      {

         console.log(event.target.value);
      }
}