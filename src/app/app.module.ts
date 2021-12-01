import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { TeamsComponent } from './teams/teams.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { RouterModule } from '@angular/router';
import { TeamFormComponent } from './team-form/team-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TeamsComponent,
    PlayersComponent,
    TeamFormComponent,
    PlayerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
