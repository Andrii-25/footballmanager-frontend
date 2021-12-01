import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

const baseUrl = 'http://localhost:8080/api/players';

@Injectable({ providedIn: 'root' })
export default class PlayersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(baseUrl);
  }

  getAllByTeamId(id: any): Observable<Player[]> {
    return this.http.get<Player[]>(`${baseUrl}/team/${id}`);
  }

  get(id: any): Observable<Player> {
    return this.http.get<Player>(`${baseUrl}/${id}`);
  }

  create(data: any, teamName: string): Observable<any> {
    return this.http.post(`${baseUrl}/new/${teamName}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${baseUrl}/${id}`);
  }

  transfer(playerId: any, team: any, data = null): Observable<any> {
    return this.http.post(
      `${baseUrl}?playerId=${playerId}&team=${team}`,
      data
    );
  }
}
