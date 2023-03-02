import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { playerArray } from "../over";


@Injectable()
export class PlayerService
{
    constructor(private client : HttpClient){}

    url = 'http://192.180.2.135:8000/matches/fetch';

    getTeamPlayer()
    {
      return this.client.get(this.url); 
     }
  }