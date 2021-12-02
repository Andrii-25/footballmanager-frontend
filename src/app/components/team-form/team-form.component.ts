import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team.model';
import TeamsService from 'src/app/service/teams.service';
import { Location } from '@angular/common';

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

  id = '';
  isEdit = false;

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (v) => (this.isEdit = v['isEdit']),
    });
    if (this.isEdit === true) {
      this.id = this.route.snapshot.paramMap.get('id') || '';
      this.getTeam(this.id);
    }
    this.newTeam();
  }

  private getTeam(id: any) {
    this.teamService.get(id).subscribe({
      next: (res) => {
        this.team = res;
      },
      error: (e) => console.log(e),
    });
  }

  saveTeam(): void {
    const data = {
      name: this.team.name,
      city: this.team.city,
      country: this.team.country,
      transferFee: this.team.transferFee,
      moneyBalance: this.team.moneyBalance,
    };

    if (this.isEdit) {
      this.teamService.update(this.id, data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e),
      });
    } else {
      this.teamService.create(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e),
      });
    }
    this._location.go('/');
    window.location.reload();
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

  backClicked() {
    this._location.go('/');
    window.location.reload();
  }
}
