import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public favIDs: Array<number> = null;
  public favTours: Array<any>;
  constructor(private _storage: Storage) { }

  /**
   * @description To initialize the favorite service
   * @param {tours}
   * @returns {}
   */
  initialize(tours) {
    console.log(tours);
    this.favTours = [];
    let that = this;
    //this.favIDs = JSON.parse(window.localStorage.getItem('FavoriteIDs'));
    this._storage.ready()
        .then(() => {
          this._storage.get('FavoriteIDs')
              .then((data) => {
                that.favIDs = data;
                if(that.favIDs == null) {
                  that.favIDs = [];
                } else {
                  tours.forEach(tour => {
                    if(that.favIDs.indexOf(tour.ID) != -1) {
                      that.favTours.push(tour);
                    }
                  });
                }
              });
        });
    console.log(this.favIDs);
    console.log(this.favTours);
  }

  /**
   * @description Add a tour
   * @param tour object
   * @returns {}
   */
  add(tour) {
    this.favIDs.push(tour.ID);
    this.favTours.push(tour);
    //window.localStorage.setItem('FavoriteIDs', JSON.stringify(this.favIDs));
    this._storage.set('FavoriteIDs', this.favIDs);
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
      //window.localStorage.setItem('FavoriteIDs', JSON.stringify(this.favIDs));
      this._storage.set('FavoriteIDs', this.favIDs);
    }
  }
}
