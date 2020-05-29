import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

	tours = [{
  "id": 1,
  "title": "Investment Managers"
}, {
  "id": 2,
  "title": "Automotive Aftermarket"
}, {
  "id": 3,
  "title": "Oil & Gas Production"
}, {
  "id": 4,
  "title": "Computer Manufacturing"
}, {
  "id": 5,
  "title": "Oil & Gas Production"
}];

  constructor() { }

  ngOnInit() {
  }

}
