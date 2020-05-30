import { Component, OnInit } from '@angular/core';
import {StoursService} from '../../services/stours.service';
import _ from 'lodash';
@Component({
  selector: 'app-tour-types',
  templateUrl: './tour-types.page.html',
  styleUrls: ['./tour-types.page.scss'],
})
export class TourTypesPage implements OnInit {

  tourTypes: any;
  constructor(private _stours: StoursService) { }

  ngOnInit() {
  	this.tourTypes = this._stours.tourTypes;
  	this.tourTypes.forEach(tourtype => {
  	  const tours = _.filter(this._stours.tours, ['Tourtype', tourtype.ID]);
  	  tourtype['Count'] = tours.length;
    });
  }

}
