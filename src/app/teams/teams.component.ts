import { Component, OnInit } from '@angular/core';
import TeamsService, { Team } from '../shared/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor(public teamsService: TeamsService) {}

  teams: Team[] = [];

  loading = true;

  displayedColumns: string[] = ['id', 'name', 'city', 'country', 'actions'];

  ngOnInit(): void {
    this.retrieveTeams();
  }

  retrieveTeams(): void {
    this.teamsService.getAll().subscribe({
      next: (data) => {
        this.teams = data;
        this.loading = false;
      },
      error: (e) => console.error(e),
    });
  }
}
