import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import PlayersService from '../../service/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  constructor(public playersService: PlayersService) {}

  public loading = true;
  public players: Player[] = [];
  public isHide = false;

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

  deletePlayer(id: number): void {
    if (window.confirm('Do you really want to delete it?')) {
      this.playersService.delete(id).subscribe(() => window.location.reload());
    }
  }

  setHide(): void {
    this.isHide = true;
  }
}
