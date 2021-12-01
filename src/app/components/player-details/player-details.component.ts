import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PlayersService from 'src/app/service/players.service';
import { Location } from '@angular/common';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
})
export class PlayerDetailsComponent implements OnInit {
  player: Player = {
    name: '',
    surname: '',
    age: 0,
    careerStartDate: new Date(),
  };

  id = '';
  isHide = false;

  constructor(
    private playerService: PlayersService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getPlayer(this.id);
  }

  private getPlayer(id: any) {
    this.playerService.get(id).subscribe({
      next: (res) => {
        this.player = res;
      },
      error: (e) => console.log(e),
    });
  }

  backClicked() {
    this._location.go('/players');
    window.location.reload();
  }

  setHide() {
    this.isHide = true;
  }
}
