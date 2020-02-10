import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';
import { VolumePipe } from './volume.pipe';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerServiceService } from './beer-service.service';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    HomeComponent,
    TruncatePipe,
    VolumePipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    BeerComponent
  ],
  providers: [BeerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

