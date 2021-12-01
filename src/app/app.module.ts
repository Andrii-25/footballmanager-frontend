import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { TeamsComponent } from './components/teams/teams.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './components/players/players.component';
import { RouterModule } from '@angular/router';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TeamsComponent,
    PlayersComponent,
    TeamFormComponent,
    PlayerFormComponent,
    TeamDetailsComponent,
    TransferFormComponent,
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
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
