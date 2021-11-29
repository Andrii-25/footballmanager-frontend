import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';

export interface Player {
  id: number;
  name: string;
  surname: string;
  country: string;
  age: number;
  careerStartDate: Date;
}

@Injectable({ providedIn: 'root' })
export default class PlayersService {
  public players: Player[] = [];

  constructor(private http: HttpClient) {}

  fetchPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>('http://localhost:8080/api/players')
      .pipe(delay(500))
      .pipe(tap((players) => (this.players = players)));
  }
}
