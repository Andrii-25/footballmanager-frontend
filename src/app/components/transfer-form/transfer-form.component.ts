import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import PlayersService from 'src/app/service/players.service';
import TeamsService from 'src/app/service/teams.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;
  teams: Team[] = [];
  loading = true;
  options: string[] = [];
  teamName: string = '';
  playerId = '';
  team = '';

  constructor(
    private playerService: PlayersService,
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get('playerId') || '';
    this.retrieveTeams();
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

  transfer(): void {
    this.playerService.transfer(this.playerId, this.team).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }
}
