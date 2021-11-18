import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Injectable({
  providedIn: 'root'
  })
  
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  favorites: any;
  full_name = "Sofia";

  public favIDs: Array<number>;
  public favLocations: Array<any>;
  storage: any;
  location: any;

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
    public favService: FavoritesService) {}
  
  ngOnInit(){ 

  } 

//   initialize(locations) {
//     this.favLocations = [];
//     this.storage.ready().then(() => {
//     this.storage.get('FavoritesIDs').then(ids => {
//       this.favIDs = ids;
//         if (this.favIDs == null) {
//           this.favIDs = [];
//         } else {
//           this.favIDs.forEach(favID => {
//           let location = locations.filter(t => t.ID == favID)[0];
//           this.favLocations.push(location);
//         });
//       }
//     });
//   });
// }

// add(location: { ID: number; }) {
//   this.favIDs.push(location.ID);
//   this.favLocations.push(location);
//   this.storage.set('FavoritesIDs', this.favIDs);
// }

// remove(location: { ID: number; }) {
//   let removeIndex:number = this.favIDs.indexOf(location.ID);
//   if (removeIndex != -1) {
//     this.favIDs.splice(removeIndex, 1);
//     this.favLocations.splice(removeIndex, 1);
//     this.storage.set('FavoritesIDs', this.favIDs);
//   }
// }

// reorder(ev) {
//   ev.detail.complete(this.favLocations);
//   this.favIDs = this.favLocations.map(tour => tour.ID);
//   this.storage.set('FavoritesIDs', this.favIDs);
//   }
}