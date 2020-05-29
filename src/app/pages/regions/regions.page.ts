import { Component, OnInit } from '@angular/core';
import {StoursService} from '../../services/stours.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {
    regions: any = null;
    constructor(private _stours: StoursService) { }

      ngOnInit() {
            this.regions = this._stours.regions;
      }

}
