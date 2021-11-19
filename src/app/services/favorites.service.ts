import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  public favIDs: Array<number>;
  public favLocations: Array<any>;

  constructor(private http: HttpClient) { }

  initialize(locations) {
    this.favLocations = [];
    this.favIDs = JSON.parse(window.localStorage.getItem('FavoritesIDs'));
    
    if (this.favIDs == null) {
      this.favIDs = [];
    } 
    
    else {
      locations.forEach(location => {
        if (this.favIDs.indexOf(locations.ID) != -1) {
          this.favLocations.push(location);
        }
      });
    }
  }

  add(location: { ID: number; }) {
    this.favIDs.push(location.ID);
    this.favLocations.push(location);
    window.localStorage.setItem('FavoritesIDs', JSON.stringify(this.favIDs));
  }

  remove(location: { ID: number; }) {
    let removeIndex:number = this.favIDs.indexOf(location.ID);
    if (removeIndex != -1) {
      this.favIDs.splice(removeIndex, 1);
      this.favLocations.splice(removeIndex, 1);
      window.localStorage.setItem('FavoritesIDs', JSON.stringify(this.favIDs));
    }
  }
}
