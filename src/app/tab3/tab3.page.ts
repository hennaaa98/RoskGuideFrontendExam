import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  
  getlocations() {
    return this.http.get('http://localhost:8080/api/rosguide/location');
  }

  constructor(
    private http: HttpClient) { }

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
