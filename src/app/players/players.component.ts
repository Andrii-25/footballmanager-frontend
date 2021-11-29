import { Component, OnInit } from '@angular/core';
import PlayersService from '../shared/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  constructor(public playersService: PlayersService) {}

  public loading = true;

  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'age',
    'careerStartDate',
    'actions',
  ];

  ngOnInit(): void {
    this.playersService.fetchPlayers().subscribe(() => {
      this.loading = false;
    });
  }
}
