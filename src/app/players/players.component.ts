import { Component, OnInit } from '@angular/core';
import PlayersService, { Player } from '../shared/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  constructor(public playersService: PlayersService) {}

  public loading = true;
  public players: Player[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'age',
    'careerStartDate',
    'actions',
  ];

  ngOnInit(): void {
    this.retrievePlayers();
  }

  retrievePlayers(): void {
    this.playersService.getAll().subscribe({
      next: (data) => {
        this.players = data;
        this.loading = false;
      },
      error: (e) => console.error(e),
    });
  }
}
