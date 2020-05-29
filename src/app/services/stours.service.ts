import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoursService {
  public regions: any;
  public tourTypes: any;
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
		.then(data => this.tourTypes = data);
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
}
