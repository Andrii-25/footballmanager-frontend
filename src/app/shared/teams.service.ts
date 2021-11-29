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

const baseUrl = 'http://localhost:8080/api/teams';

@Injectable({ providedIn: 'root' })
export default class TeamsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(baseUrl);
  }

  get(id: any): Observable<Team> {
    return this.http.get<Team>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
