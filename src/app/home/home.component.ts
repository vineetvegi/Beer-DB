import { BeerComponent } from './../beer/beer.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerServiceService } from '../beer-service.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter: string[];
  item;
  months;
  years;
  byear;
  ayear;
  abvpercent;
  brewBefore: any;
  brewAfter: any;
  Al: any;
  V: any;
  // tslint:disable-next-line:variable-name
  constructor(private _beerService: BeerServiceService, private _router: Router) { }

  // Will return an array of values from start to stop by incrementing the step value
  // /**
  //  *
  //  * @param start takes a date "2007/"
  //  * @param stop
  //  * @param step
  //  * @returns
  //  */
  range(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
  }

  ngOnInit() {
    this.filter = [];
    this.years = this.range(2007, 2016, 1);
    this.item = '';
  }

  // Eventhandler to set the checkbox value.

  onCheck(event: any) {
    if (event.target.name === 'AlV' && event.target.value === 'Unchecked') {
      this.abvpercent = '0-15';
      event.target.value = 'Checked';
    } else if (event.target.name === 'AlV' && event.target.value === 'Checked') {
      this.abvpercent = null;
      event.target.value = 'Unchecked';
    }
    if (event.target.name === 'before' && event.target.value === 'Unchecked') {
      this.byear = 2016;
      event.target.value = 'Checked';
    } else if (event.target.name === 'before' && event.target.value === 'Checked') {
      this.byear = null;
      event.target.value = 'Unchecked';
    }
    if (event.target.name === 'after' && event.target.value === 'Unchecked') {
      this.ayear = 2007;
      event.target.value = 'Checked';
    } else if (event.target.name === 'after' && event.target.value === 'Checked') {
      this.ayear = null;
      event.target.value = 'Unchecked';
    }
  }


  onChange() {


  }
  // Eventhandler to prepare query string

  onClick() {
    // tslint:disable-next-line:max-line-length
    if (this.abvpercent) {
      this.filter.push('abv_gt=' + this.abvpercent.split('-')[0]);
      this.filter.push('abv_lt=' + this.abvpercent.split('-')[1]);
    }
    if (this.byear) {
      this.filter.push('brewed_before=07-' + this.byear);
    }
    if (this.ayear) {
      this.filter.push('brewed_after=07-' + this.ayear);
    }
    this._beerService.filter = this.filter;
    this._router.navigate(['/beer', this.item]);
  }
}
