import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './beer/beer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'beer/:item', component: BeerComponent },
{ path: '', redirectTo: '/', pathMatch: 'prefix'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
