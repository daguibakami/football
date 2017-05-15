import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { SaisonsComponent } from './saisons/saisons.component';
import { SaisonDetailComponent } from './saisons/saison-detail.component';
import { SaisonsService } from './saisons/saisons.service';
import { CompetitionsComponent } from './competitions/competitions.component';

const appRoutes: Routes = [
  { path: '', component: ActualitesComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'admin/saisons', component: SaisonsComponent },
  { path: 'admin/competitions', component: CompetitionsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, ActualitesComponent, SaisonsComponent, SaisonDetailComponent, CompetitionsComponent],
  providers: [
    SaisonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
