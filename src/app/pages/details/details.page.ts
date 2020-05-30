import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StoursService} from '../../services/stours.service';
import _ from 'lodash';
import {FavoritesService} from '../../services/favorites.service';
import {ActionSheetController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour: any = null;
  isFavorite: boolean;
  region: string;
  tourType: string;
  showSocial: boolean = false;

  constructor(private _route: ActivatedRoute,
              private router: Router,
              private _stours: StoursService,
              public _favorites: FavoritesService,
              private _actionSheetCtrl: ActionSheetController,
              private _alertCtrl: AlertController) { }

  ngOnInit() {
  	const id = this._route.snapshot.paramMap.get('id');
  	this.tour = _.find(this._stours.tours, ['ID', parseInt(id)]);
    this.isFavorite = this._favorites.favIDs.indexOf(parseInt(id)) != -1;
    this.region = _.find(
        this._stours.regions,
        {'ID': this.tour.Region}
    ).Name;
    this.tourType = _.find(
        this._stours.tourTypes,
        {'ID':this.tour.Tourtype}
    ).Name;
  }

  /**
   *@description Action sheet for favorites menu
   * @param {}
   */
  async presentActionSheet() {
    const actionSheet = await this._actionSheetCtrl.create({
      header: 'Tour',
      buttons: [
        {
          text: 'Request',
          handler: () => {
            //ToDo
            window.location.href = "/request";
          }
        },
        {
          text: (this.isFavorite) ? 'Remove from Favorites' : 'Add to Favorites',
          role: (this.isFavorite) ? 'destructive' : '',
          handler: () => {
            if(this.isFavorite) {
              this.presentAlert();
            } else {
              this._favorites.add(this.tour);
              this.isFavorite = true;
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
    ]
    });
    await actionSheet.present();
  }

  /**
   * @description Alert confirmation message
   */
  async presentAlert() {
    const alert = await this._alertCtrl.create({
      header: 'Remove Favorite',
      message: 'Do you really want to remove this favorite?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this._favorites.remove(this.tour);
            this.isFavorite = false;
          }
        }
      ]
    });
    await alert.present();
  }

  /**
   * @description Toggles display of social fab button
   * @param {}
   */
  toggleSocial() {
    this.showSocial = !this.showSocial;
  }

  /**
   * @description Open the social sharing application
   * @param {name} Name of sharing app
   */
  openSocial(app) {
    console.log('Native sharing via ' + app);
  }

  /**
   * @description load default image when image fails to load
   * @param {$event}
   */
  loadDefaultImage(event) {
    event.target.src = '/assets/images/posts/default.jpg';
  }

}
