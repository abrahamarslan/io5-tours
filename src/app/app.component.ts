import { Component, OnInit } from '@angular/core';

import {Platform, PopoverController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {StoursService} from 'src/app/services/stours.service';
import {FavoritesService} from './services/favorites.service';
import {AboutComponent} from './components/about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public settings: any = {};
  public appPages = [
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'Regions',
      url: '/regions',
      icon: 'images'
    },
    {
      title: 'Tour-Types',
      url: '/tour-types',
      icon: 'bus'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _stours: StoursService,
    private _favorites: FavoritesService,
    private _popoverCtrl: PopoverController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initServices();
    });
  }

  /**
   * @description initialize services
   * @param {}
   */
  async initServices() {
    await this._stours.initialize();
    await this._favorites.initialize(this._stours.tours);
  }

  //User has changed their settings
  updateSettings() {
    console.log(this.settings.notifications);
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  /**
   * @description About the application popover
   * @param {}
   */
  async about() {
    const popover = await this._popoverCtrl.create({
      component: AboutComponent,
      translucent: true
    });
    await popover.present();
  }
}
