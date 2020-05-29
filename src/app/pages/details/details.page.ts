import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StoursService} from '../../services/stours.service';
import _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour: any = null;
  constructor(private _route: ActivatedRoute, private router: Router, private _stours: StoursService) { }

  ngOnInit() {
  	let id = this._route.snapshot.paramMap.get('id');
  	this.tour = _.find(this._stours.tours, ['ID',parseInt(id)]);

  }

}
