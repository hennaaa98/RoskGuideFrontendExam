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
import { find } from 'lodash';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

  getLocations: any;
  locations: any;
  locationsService: any;
  location = null;
  isFavorite: boolean;
  favorites: any;
  activatedRoute: any;
  baseUrl: any;


  getlocations() {
    return this.http.get(`${this.baseUrl}` + `/location`)
  }

  //We inject the popover controller to the constructor 
  constructor(private http: HttpClient, public favService: FavoritesService, private route: ActivatedRoute) { }

  initialize() {
    this.getLocations().then(data => {
      this.favService.initialize(this.locations);
      });
    }

  ngOnInit(){ 
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.locationsService = params.get('id');
      }
    )

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.location = find(this.locationsService.locations, ['ID', parseInt(id)]);

    this.isFavorite =
    this.favService.favIDs.indexOf(parseInt(id)) != -1;
  } 


  // // User clicked on 'About this app' * And add the asynch clicked method.
  // async aboutKaffeKilden() {
  //   const popover = await this.popoverController.create({ //first we create the popover, 
  //     component: AboutKaffeKildenComponent, //it expected a component property, we use our kaffeKilden
  //     translucent: true // state we want it to be translucent.
  //   });
  //   await popover.present(); //now it's ready to be called.
  // }

   
  // async aboutSatchmo() {
  //   const popover = await this.popoverController.create({ 
  //     component: AboutSatchmoComponent,
  //     translucent: true 
  //   });
  //   await popover.present(); 
  // }

  // async aboutKorn() {
  //   const popover = await this.popoverController.create({ 
  //     component: AboutKornComponent,
  //     translucent: true 
  //   });
  //   await popover.present(); 
  // }

  // async aboutC48() {
  //   const popover = await this.popoverController.create({ 
  //     component: AboutC48Component,
  //     translucent: true 
  //   });
  //   await popover.present(); 
  // }

  // async aboutVivaldi() {
  //   const popover = await this.popoverController.create({ 
  //     component: AboutVivaldiComponent,
  //     translucent: true 
  //   });
  //   await popover.present(); 
  // }

  // async aboutRibhouse() {
  //   const popover = await this.popoverController.create({ 
  //     component: AboutRibHouseComponent,
  //     translucent: true 
  //   });
  //   await popover.present(); 
  // }
}
