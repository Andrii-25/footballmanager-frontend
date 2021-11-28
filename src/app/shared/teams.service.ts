import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';

export interface Team {
  id: number;
  name: string;
  city: string;
  country: string;
  moneyBalance: number;
  transferFee: number;
  players: object;
}

@Injectable({ providedIn: 'root' })
export default class TeamsService {
  public teams: Team[] = [];

  constructor(private http: HttpClient) {}

  fetchTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>('http://localhost:8080/api/teams')
      .pipe(delay(500))
      .pipe(tap((teams) => (this.teams = teams)));
  }
}
