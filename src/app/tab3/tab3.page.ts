import { Component } from '@angular/core';
// import { PopoverController } from '@ionic/angular'; //import the popover controller
// import { AboutKaffeKildenComponent } from '../components/about-kaffe-kilden/about-kaffe-kilden.component'; // import the component.
// import { AboutSatchmoComponent } from '../components/about-satchmo/about-satchmo.component';
// import { AboutKornComponent } from '../components/about-korn/about-korn.component';
// import { AboutC48Component } from '../components/about-c48/about-c48.component';
// import { AboutVivaldiComponent } from '../components/about-vivaldi/about-vivaldi.component';
// import { AboutRibHouseComponent } from '../components/about-rib-house/about-rib-house.component';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

const baseUrl = 'http://localhost:8080/api/rosguide/';

@Injectable({
  providedIn: 'root'
  })
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  location_id: number;
  location_icon: string;
  location_name: string;
  location_openinghours: string;
  location_website: string;
  location_lat: number;
  location_lng: number;

  location = null;
  locations: any;
  locationsService: any;

  favorites: any;
  isFavorite: boolean;
 
  activatedRoute: any;

  
  getlocations() {
    return this.http.get('http://localhost:8080/api/rosguide/location');
  }

  //We inject the popover controller to the constructor 
  constructor(
    private http: HttpClient, 
    public favService: 
    FavoritesService, 
    private route: ActivatedRoute) { }

  initialize() {
    this.getlocations().subscribe((data: any) => {
      this.locations = data;
      console.log(data);
      });
    }

  ngOnInit(){ 

    this.initialize();
 
  } 

  // Google maps navigation
  navigateTo(location: any) {
    console.log('https://google.com/maps/dir/?api=1&destination=' + location.location_lat + ',' + location.location_lng);
    window.open('https://google.com/maps/dir/?api=1&destination=' + location.location_lat + ',' + location.location_lng)
  }
}
