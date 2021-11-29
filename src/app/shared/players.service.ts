import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Player {
  id: number;
  name: string;
  surname: string;
  country: string;
  age: number;
  careerStartDate: Date;
}

const baseUrl = 'http://localhost:8080/api/players';

@Injectable({ providedIn: 'root' })
export default class PlayersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(baseUrl);
  }

  get(id: any): Observable<Player> {
    return this.http.get<Player>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${baseUrl}/${id}`);
  }

  transfer(playerId: any, teamId: any, data = null): Observable<any> {
    return this.http.post(
      `${baseUrl}?playerId=${playerId}&teamId=${teamId}`,
      data
    );
  }
}
