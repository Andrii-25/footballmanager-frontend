import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: 'edit-team/:id',
        component: TeamFormComponent,
        data: { isEdit: true },
      },
      {
        path: 'more/:id',
        component: TeamDetailsComponent,
        children: [
          {
            path: 'transfer/:playerId',
            component: TransferFormComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'players',
    component: PlayersComponent,
    children: [
      {
        path: 'edit-player/:id',
        component: PlayerFormComponent,
        data: { isEdit: true },
      },
      {
        path: 'more/:id',
        component: PlayerDetailsComponent,
      },
    ],
  },
  { path: 'add-team', component: TeamFormComponent, data: { isEdit: false } },
  { path: 'add-player', component: PlayerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
