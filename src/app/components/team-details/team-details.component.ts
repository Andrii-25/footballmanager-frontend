import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';
import PlayersService from '../../service/players.service';
import TeamsService from '../../service/teams.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {
  team: Team = {
    name: '',
    city: '',
    country: '',
    transferFee: 0,
    moneyBalance: 0,
  };

  id = '';
  players: Player[] = [];
  loading = true;
  isHide = false;

  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'age',
    'careerStartDate',
    'actions',
  ];

  constructor(
    private teamService: TeamsService,
    private playerService: PlayersService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getTeam(this.id);
    this.retrievePlayers(this.id);
  }

  private getTeam(id: any) {
    this.teamService.get(id).subscribe({
      next: (res) => {
        this.team = res;
      },
      error: (e) => console.log(e),
    });
  }

  private retrievePlayers(id: any): void {
    this.playerService.getAllByTeamId(id).subscribe({
      next: (data) => {
        this.players = data;
        this.loading = false;
      },
      error: (e) => console.error(e),
    });
  }

  backClicked() {
    this._location.go('/teams');
    window.location.reload();
  }

  setHide() {
    this.isHide = true;
  }
}
