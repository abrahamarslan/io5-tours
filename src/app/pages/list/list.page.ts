import { Component, OnInit } from '@angular/core';
import {StoursService}  from '../../services/stours.service';
import {ActivatedRoute} from '@angular/router';
import _ from 'lodash';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  tours: any;
  selection: any;
  constructor(private _stours: StoursService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selection = this._activatedRoute.snapshot.params;
    let category = this.selection.Category;
    let criteria = this.selection.Criteria;
    this.tours = _.filter(this._stours.tours, [category, criteria]);
  }

}
