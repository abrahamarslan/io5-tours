import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favIDs: Array<number>;
  public favTours: Array<any>;
  constructor() { }

  /**
   * @description To initialize the favorite service
   * @param {tours}
   * @returns {}
   */
  initialize(tours) {
    this.favTours = [];
    this.favIDs = JSON.parse(window.localStorage.getItem('FavoriteIDs'));
    if(this.favIDs == null) {
      this.favIDs = [];
    } else {
      tours.forEach(tour => {
        if(this.favIDs.indexOf(tour.ID) != -1) {
          this.favTours.push(tour);
        }
      });
    }
  }

  /**
   * @description Add a tour
   * @param tour object
   * @returns {}
   */
  add(tour) {
    this.favIDs.push(tour.ID);
    this.favTours.push(tour);
    window.localStorage.setItem('FavoriteIDs', JSON.stringify(this.favIDs));
  }

  /**
   * @description Remove a tour
   * @param tour object
   * @returns {}
   */
  remove(tour) {
    let removeIndex:number = this.favIDs.indexOf(tour.ID);
    if(removeIndex != -1) {
      this.favIDs.splice(removeIndex, 1);
      window.localStorage.setItem('FavoriteIDs', JSON.stringify(this.favIDs));
    }
  }
}
