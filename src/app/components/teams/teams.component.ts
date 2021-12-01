import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import TeamsService from '../../service/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor(public teamsService: TeamsService) {}

  teams: Team[] = [];
  loading = true;
  isHide = false;

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

  deleteTeam(id: number): void {
    this.teamsService.delete(id).subscribe(() => window.location.reload());
  }

  setHide(): void {
    this.isHide = true;
  }
}
