import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from 'src/app/models/player.model';
import { Team } from 'src/app/models/team.model';
import TeamsService from 'src/app/service/teams.service';
import PlayersService from '../../service/players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
  player: Player = {
    name: '',
    surname: '',
    age: 0,
    careerStartDate: new Date(),
  };

  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;
  teams: Team[] = [];
  loading = true;
  options: string[] = [];
  teamName: string = '';

  constructor(
    private playerService: PlayersService,
    private teamService: TeamsService
  ) {}

  ngOnInit(): void {
    this.retrieveTeams();
    this.newPlayer();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  retrieveTeams(): void {
    this.teamService.getAll().subscribe({
      next: (data) => {
        this.options = data.map((t) => t.name);
        this.loading = false;
      },
      error: (e) => console.error(e),
    });
  }

  savePlayer(): void {
    const data = {
      name: this.player.name,
      surname: this.player.surname,
      age: this.player.age,
      careerStartDate: this.player.careerStartDate,
    };

    this.playerService.create(data, this.teamName).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }

  newPlayer(): void {
    this.player = {
      name: '',
      surname: '',
      age: 0,
      careerStartDate: new Date(),
    };
  }
}
