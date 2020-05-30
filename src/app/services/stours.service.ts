import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class StoursService {
  public regions: any;
  public tourTypes: any;
  public tours: any;
  baseURL:string = 'https://tours-firebase.firebaseio.com';
  constructor(private _http: HttpClient) { }

  /**
   * Initialize function for constructor
   * @return {}
   */
   initialize() {
	  this.getRegions()
		  .then(data => this.regions = data);
	  this.getTourTypes()
		  .then(data => this.tourTypes = _.sortBy(data, 'Name'));
	  this.getTours()
		  .then(data => this.tours = _.sortBy(data, 'Title'));
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
}
