import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import _ from 'lodash';
import {LoadingController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class StoursService {
  public regions: any;
  public tourTypes: any;
  public tours: any;
  baseURL:string = 'https://tours-firebase.firebaseio.com';
  constructor(private _http: HttpClient, private _loadingCtrl: LoadingController) { }

  /**
   * Initialize function for constructor
   * @return {}
   */
   async initialize() {
   	  const loading = await this._loadingCtrl.create({
		  message: 'Loading',
		  spinner: 'crescent'
	  });
   	  await loading.present();
	  await this.getRegions()
		  .then(data => this.regions = data);
	  await this.getTourTypes()
		  .then(data => this.tourTypes = _.sortBy(data, 'Name'));
	  await this.getTours()
		  .then(data => this.tours = _.sortBy(data, 'Title'));
	  await loading.dismiss();
   }

  /**
  	 * Gets the regions.
  	 * @param {}
  	 * @return {<Promise>}
 	*/		
	getRegions() {
		let requestURL = `${this.baseURL}/Regions.json`;
		return this._http.get(requestURL).toPromise();
	}

	/**
	 * Get tour types 
	 * @param {}
	 * @return {<Promise>}
	 */
	 getTourTypes() {
	 	let requestURL = `${this.baseURL}/Tourtypes.json`;
	 	return this._http.get(requestURL).toPromise();
	 }

	/**
	 *
	 * * Get tours
	 * @param {}
	 * @return {<Promise>}
	 *
	 */
	getTours() {
	 	let requestURL = `${this.baseURL}/Tours.json`;
	 	return this._http.get(requestURL).toPromise();
	 }

	/**
	 * @description Loading controller while the data loads
	 * @param {}
	 */

}
