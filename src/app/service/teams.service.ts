import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export default class TeamsService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}teams`);
  }

  get(id: any): Observable<Team> {
    return this.http.get<Team>(`${this.url}teams/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.url}teams`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}teams/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}teams/${id}`);
  }
}
