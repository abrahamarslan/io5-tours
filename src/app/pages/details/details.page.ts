import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour: any = null;
  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	console.log(this._route);
  	this.tour = this._route.snapshot.params;
  	console.log(this.tour);
  }

}
