import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export default class PlayersService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}players`);
  }

  getAllByTeamId(id: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}players/team/${id}`);
  }

  get(id: any): Observable<Player> {
    return this.http.get<Player>(`${this.url}players/${id}`);
  }

  create(data: any, teamName: string): Observable<any> {
    return this.http.post(`${this.url}players/new/${teamName}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}players/${id}`, data);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.url}players/${id}`);
  }

  transfer(playerId: any, team: any, data = null): Observable<any> {
    return this.http.post(
      `${this.url}players/transfer?playerId=${playerId}&team=${team}`,
      data
    );
  }
}
