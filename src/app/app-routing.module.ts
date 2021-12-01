import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      {
        path: 'edit-team/:id',
        component: TeamFormComponent,
        data: { isEdit: true },
      },
    ],
  },
  { path: 'players', component: PlayersComponent },
  { path: 'add-team', component: TeamFormComponent, data: { isEdit: false } },
  { path: 'add-player', component: PlayerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
