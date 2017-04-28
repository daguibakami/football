import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }  from './app.component';
import { ActualitesComponent }  from './actualites/actualites.component';
import { SaisonsComponent }  from './admin/saisons/saisons.component';
import { CompetitionsComponent }  from './admin/competitions/competitions.component';

const appRoutes: Routes = [
  { path: '', component: ActualitesComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'admin/saisons', component: SaisonsComponent },
  { path: 'admin/competitions', component: CompetitionsComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [ AppComponent,ActualitesComponent,SaisonsComponent,CompetitionsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
