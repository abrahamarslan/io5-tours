import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StoursService} from '../../services/stours.service';
import _ from 'lodash';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour: any = null;
  isFavorite: boolean;
  constructor(private _route: ActivatedRoute,
              private router: Router,
              private _stours: StoursService,
              public _favorites: FavoritesService) { }

  ngOnInit() {
  	const id = this._route.snapshot.paramMap.get('id');
  	this.tour = _.find(this._stours.tours, ['ID', parseInt(id)]);
    this.isFavorite = this._favorites.favIDs.indexOf(parseInt(id)) != -1;
  }
}
