import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import TeamsService from 'src/app/service/teams.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent implements OnInit {
  team: Team = {
    name: '',
    city: '',
    country: '',
    transferFee: 0,
    moneyBalance: 0,
  };

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.newTeam();
  }

  saveTeam(): void {
    const data = {
      name: this.team.name,
      city: this.team.city,
      country: this.team.country,
      transferFee: this.team.transferFee,
      moneyBalance: this.team.moneyBalance,
    };

    this.teamService.create(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  newTeam(): void {
    this.team = {
      name: '',
      city: '',
      country: '',
      transferFee: 0,
      moneyBalance: 0,
    };
  }
}
