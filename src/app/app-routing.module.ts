import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerComponent } from './beer/beer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'beer/:item', component: BeerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
