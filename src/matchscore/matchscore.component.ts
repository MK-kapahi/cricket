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
player_Name: any;
    constructor(private service : PlayerService){}
    playerData: Array<'Array , string'>=[]
    addplayer= true;
    player :any={};
    player_data :any=[];
    player_list:Array<any>=[]
    active_player:string ="";
    strike_player : string ="";
    bowler_data :any =[]
    display = false ;
    bowler_list:Array<any>=[];
    displayName=false;
    bowler :any = ""
    ngOnInit(): void {
      this.service.getTeamPlayer().pipe(map((res:any) => {
         for(const key in res) {
             this.playerData.push({...res[key],id:key});
            }
            console.log(this.playerData)
     }))
     .subscribe()
      }
    newOver = new Over() 
    currentscore:number=0;
    button_click=0;
    sendScore(event:any)
    {
       this.currentscore = Number(event.target.value);
       console.log(this.currentscore);

       if(!(this.currentscore%2==0))
       {
           const player = this.active_player;
           this.active_player = this.strike_player;
           this.strike_player = player;
       }
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
      this.addplayer= false;
    this.player= this.playerData.find(this.findTeam);

    console.log(this.player)

    this.player_data=this.player['TeamA'];

    //batting team
    this.player_list=this.player_data['Players']
    console.log(this.player_list)
   //  this.player_list =this.player['team1_players'];

   //  this.bowler_list = this.player['team2_players']

   //bowling team
   this.bowler_data=this.player['TeamB'];
    this.bowler_list =this.player['TeamB']['Players'];
    this.display=true;
    }

    findTeam (data :any) {
        return data.id === "-NPahkw5SfysO-RvCNrO";
      }

      on_Strike_player1(event:any)
      {

         this.active_player = event.target.value;
         console.log(event.target.value);
         this.active_player = this.player_list.find((id :any)=> id.id== event.target.value).name
         console.log(this.active_player)

         for(let player of this.player_list)
         {
            //console.log(player);
            if(player.id == event.target.value)
            {
               let index =this.player_list.indexOf(player)
               this.player_list.splice(index,1)
               console.log(player);
            }

         }
         console.log(this.player_list);
      }

      on_Strike_player2(event:any)
      {
         this.strike_player;
         console.log(event.target.value);
         this.strike_player = this.player_list.find((id :any)=> id.id== event.target.value).name
         console.log(this.strike_player)

         this.displayName= true;
         this.display= false;
      }

      on_Strike_bowler(event:any)
      {

         console.log(event.target.value);
         this.bowler = this.player_list.find((id :any)=> id.id== event.target.value).name
      }
      
      Change_player()
      {
         let reason = prompt(" Enter the reason ")
           this.addplayer=true;
           this.active_player = this.strike_player;
           this.strike_player = ""
      }
}