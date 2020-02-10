import { TruncatePipe } from './../truncate.pipe';
import { VolumePipe } from './../volume.pipe';
import { Component, OnInit, NgModule, Input, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { BeerServiceService } from '../beer-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import {NgbModule, NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  @Input() my_modal_title;
  // tslint:disable-next-line:variable-name
  @Input() my_modal_content;
  constructor(private _beerService: BeerServiceService,
              private route: ActivatedRoute, private modalService: NgbModal) { }

  totalpsts = 325;
  perpage: number;
  closeResult: string;
  lstposts: any;
  searchitem;
  current: number;
  toggleId: any;
  modalObj: any;
  fullId;

  toggleRead(event, target, style, display = 'none') {
    this.toggleId = event.target.id;
  }

  onChange() {
    this.current = 1;
    this._beerService.perpage = this.perpage;
    this.getData(this.current);
  }
  open(e, content) {
    this.fullId =  e.target.id;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  getData(page: any) {
    this.current = page;
    this._beerService.getPosts(page).subscribe((data: Array<any>) => {
      this.lstposts = this.searchitem ? data.filter(e => JSON.stringify(e).includes(this.searchitem)) : data;
      // tslint:disable-next-line: forin
      for (const i in this.lstposts) {
        const ingredients = this.lstposts[i].ingredients;
        let ingredientsNames = [];
        for (const j in ingredients) {
          if (Array.isArray(ingredients[j])) {
            ingredientsNames = ingredientsNames.concat(ingredients[j].map(ingredient => ingredient.name));
          } else {
            ingredientsNames.push(ingredients[j]);
          }
        }

        // tslint:disable-next-line: no-unused-expression
        this.toggleId;
        this.lstposts[i].ingredientsString = ingredientsNames.join(', ') + '.';
        this.lstposts[i].food_pairingString = this.lstposts[i].food_pairing.join(', ') + '.';
      }
    });
  }
  ngOnInit() {
    this.toggleId = null;
    this.current = 1;
    this.perpage = 9;
    this.route.params.subscribe(data => { this.searchitem = data.item; });
    this.onChange();
  }
}

