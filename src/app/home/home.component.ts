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
  bmonth;
  byear;
  ayear;
  amonth;
  abvpercent;
  // tslint:disable-next-line:variable-name
  constructor(private _beerService: BeerServiceService, private _router: Router) { }

  range(start, stop, step) {
  return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  }

  ngOnInit() {
  this.filter = [];
  this.months = this.range(1, 12, 1);
  this.years = this.range(2007, 2016, 1);
  this.item = '';
  }

  onCheck(event: any) {
    if (event.target.name === 'AlV' && event.target.value === 'Unchecked') {
    this.abvpercent = '0-10';
    event.target.value = 'Checked';
    } else if (event.target.name === 'AlV' && event.target.value === 'Checked') {
      this.abvpercent = null;
      event.target.value = 'Unchecked';
    }
    if (event.target.name === 'before' && event.target.value === 'Unchecked') {
    this.bmonth = 1;
    this.byear = 2016;
    event.target.value = 'Checked';
    } else if (event.target.name === 'before' && event.target.value === 'Checked') {
    this.bmonth = this.byear = null;
    event.target.value = 'Unchecked';
      }
    if (event.target.name === 'after' && event.target.value === 'Unchecked') {
    this.amonth = 1;
    this.ayear = 2007;
    event.target.value = 'Checked';
    } else if (event.target.name === 'after' && event.target.value === 'Checked') {
    this.amonth = this.ayear = null;
    event.target.value = 'Unchecked';
      }
  }


  onChange() {


  }
  onClick() {
  // tslint:disable-next-line:max-line-length
  if (this.abvpercent) {
  this.filter.push('abv_gt=' + this.abvpercent.split('-')[0]);
  this.filter.push('abv_lt=' + this.abvpercent.split('-')[1]);
  }
  if (this.bmonth) {
  this.filter.push('brewed_before=' + this.bmonth + '-' + this.byear);
  }
  if (this.amonth) {
  this.filter.push('brewed_after=' + this.amonth + '-' + this.ayear);
  }
  this._beerService.filter = this.filter;
  this._router.navigate(['/beer', this.item]);

  }

}
