import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'add-team', component: TeamFormComponent },
  { path: 'add-player', component: PlayerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
