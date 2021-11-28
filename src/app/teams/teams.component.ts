import { Component, OnInit } from '@angular/core';
import TeamsService from '../shared/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor(public teamsService: TeamsService) {}

  public loading = true;

  displayedColumns: string[] = ['id', 'name', 'city', 'country', 'actions'];

  ngOnInit(): void {
    this.teamsService.fetchTeams().subscribe(() => {
      this.loading = false;
    });
  }
}
