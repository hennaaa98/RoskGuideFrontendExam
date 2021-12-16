import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map: any;
  markers_backend: any;


  //references to HTML map
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];

  favourites: any = [
     "Roskilde Domkirke",
     "Roskilde Museum",
  ]

  //An array of custom objects for Google markers
  markers: any = [
    {
      id: 1,
      title: "Roskilde Domkirke",
      latitude: "55.64273732750571",
      longtitude: "12.079664784346173",
      w_directions: "11 min walk from Roskilde St.",
      b_directions: "3 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: 10 - 16",
      opening_hours_tues: "Tuesday: 10 - 16",
      opening_hours_wed: "Wednesday: 10 - 16",
      opening_hours_thur: "Thursday: 10 - 16",
      opening_hours_fri: "Friday: 10 - 16",
      opening_hours_sat: "Saturday: 10 - 16",
      opening_hours_sun: "Sunday: 13 - 16",
      icon: "https://img.icons8.com/ios-filled/35/333333/treasure-chest.png"
    },
    {
      id: 2,
      title: "Vikingeskibsmuseet",
      latitude: "55.651219199390404",
      longtitude: "12.080580289014042",
      w_directions: "20 min walk from Roskilde St.",
      b_directions: "6 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: 10 - 17",
      opening_hours_tues: "Tuesday: 10 - 17",
      opening_hours_wed: "Wednesday: 10 - 17",
      opening_hours_thur: "Thursday: 10 - 16",
      opening_hours_fri: "Friday: 10 - 16",
      opening_hours_sat: "Saturday: 10 - 16",
      opening_hours_sun: "Sunday: 10 - 16",
      icon: "https://img.icons8.com/ios-filled/35/f1c40f/closed-treasure-chest.png"
    },
    {
      id: 3,
      title: "Roskilde Museum",
      latitude: "55.642832156820205",
      longtitude: "12.08402640596092",
      w_directions: "7 min walk from Roskilde St.",
      b_directions: "2 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: 10 - 16",
      opening_hours_tues: "Tuesday: 10 - 16",
      opening_hours_wed: "Wednesday: 10 - 21",
      opening_hours_thur: "Thursday: 10 - 16",
      opening_hours_fri: "Friday: 10 - 16",
      opening_hours_sat: "Saturday: 10 - 16",
      opening_hours_sun: "Sunday: 10 - 16",
      icon: "https://img.icons8.com/ios-filled/35/333333/closed-treasure-chest.png"
    },
    {
      id: 4,
      title: "Ragnarock",
      latitude: "55.62837645709699",
      longtitude: "12.082424859925794",
      w_directions: "21 min walk from Roskilde St.",
      b_directions: "7 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: Closed",
      opening_hours_tues: "Tuesday: 10 - 17",
      opening_hours_wed: "Wednesday: 10 - 21",
      opening_hours_thur: "Thursday: 10 - 17",
      opening_hours_fri: "Friday: 10 - 17",
      opening_hours_sat: "Saturday: 10 - 17",
      opening_hours_sun: "Sunday: 10 - 17",
      icon: "https://img.icons8.com/ios-filled/35/333333/closed-treasure-chest.png"
    },
    {
      id: 5,
      title: "Museet for Samtidskunst",
      latitude: "55.642584983009705",
      longtitude: "12.0817528059609879",
      w_directions: "9 min walk from Roskilde St.",
      b_directions: "2 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: Closed",
      opening_hours_tues: "Tuesday: 12 - 17",
      opening_hours_wed: "Wednesday: 12 - 20",
      opening_hours_thur: "Thursday: 12 - 17",
      opening_hours_fri: "Friday: 12 - 17",
      opening_hours_sat: "Saturday: 11 - 16",
      opening_hours_sun: "Sunday: 11 - 16",
      icon: "https://img.icons8.com/ios-filled/35/f1c40f/closed-treasure-chest.png"
    },
    {
      id: 6,
      title: "Disotto",
      latitude: "55.63988668877055",
      longtitude: "12.069298171745864",
      w_directions: "17 min walk from Roskilde St.",
      b_directions: "5 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: Closed",
      opening_hours_tues: "Tuesday: 17 - 22",
      opening_hours_wed: "Wednesday: 17 - 22",
      opening_hours_thur: "Thursday: 17 - 22",
      opening_hours_fri: "Friday: 17 - 22",
      opening_hours_sat: "Saturday: 17 - 22",
      opening_hours_sun: "Sunday: Closed",
      icon: "https://img.icons8.com/ios-filled/35/333333/closed-treasure-chest.png"
    },
    {
      id: 7,
      title: "Restaurant Ilden Roskilde",
      latitude: "55.64142729915131",
      longtitude: "12.09060525444214",
      w_directions: "3 min walk from Roskilde St.",
      b_directions: "2 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: 16.45 - 21.30",
      opening_hours_tues: "Tuesday: 16.45 - 21.30",
      opening_hours_wed: "Wednesday: 16.45 - 21.30",
      opening_hours_thur: "Thursday: 16.45 - 21.30",
      opening_hours_fri: "Friday: 17 - 22",
      opening_hours_sat: "Saturday: 09.45 - 14 & 17 - 22",
      opening_hours_sun: "Sunday: 09.45 - 14 & 16.45 - 21.30",
      icon: "https://img.icons8.com/ios-filled/35/333333/closed-treasure-chest.png"
    },
    {
      id: 8,
      title: "Wok Gourmet",
      latitude: "55.645560145272654",
      longtitude: "12.069355563340435",
      w_directions: "20 min walk from Roskilde St.",
      b_directions: "7 min bike ride from Roskilde St.",
      opening_hours_mon: "Monday: 16 - 21",
      opening_hours_tues: "Tuesday: 16 - 21",
      opening_hours_wed: "Wednesday: 16 - 21",
      opening_hours_thur: "Thursday: 16 - 21",
      opening_hours_fri: "Friday: 16 - 21",
      opening_hours_sat: "Saturday: 16 - 21",
      opening_hours_sun: "Sunday: 16 - 21",
      icon: "https://img.icons8.com/ios-filled/35/333333/closed-treasure-chest.png"
    },
  ];

  constructor(public router: Router) {}

  ionViewDidEnter() {
    this.showMap();
  }

  //Creating and generating Google markers
  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longtitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longtitude: marker.longtitude,
        w_directions: marker.w_directions,
        b_directions: marker.b_directions,
        opening_hours_mon: marker.opening_hours_mon,
        opening_hours_tues: marker.opening_hours_tues,
        opening_hours_wed: marker.opening_hours_wed,
        opening_hours_thur: marker.opening_hours_thur,
        opening_hours_fri: marker.opening_hours_fri,
        opening_hours_sat: marker.opening_hours_sat,
        opening_hours_sun: marker.opening_hours_sun,
        more_information: marker.more_information,
        more_information_name: marker.more_information_name,
        book: marker.book,
        icon: marker.icon
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  //Content inside of markers
  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<div>' +
                                '<b style="font-size:15px;"></ion-icon>Directions</b>' +
                                '<br>' +
                                '<span>' + marker.w_directions + '</span>' +
                                '<br>' +
                                '<span>' + marker.b_directions + '</span>' +
                                '<br>' +
                                '<br>' +
                              '</div>' +

                              '<div>' +
                                '<b style="font-size:15px;">Opening hours</b>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_mon + '</span>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_tues + '</span>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_wed + '</span>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_thur + '</span>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_fri + '</span>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_sat + '</span>' +
                                '<br>' +
                                '<span>' + marker.opening_hours_sun + '</span>' +
                                '<br>' +
                                '<br>' +
                              '</div>' +

                              '<div>' +
                                '<span>' +
                                  '<ion-button id="navigate">Navigate</ion-button>' + 
                                '</span>' +
                                '<span>' +
                                  '<ion-button id="#"><ion-icon name="extension-puzzle-outline"></ion-icon></ion-button>' + 
                                '</span>' +
                              '</div>' +
                            '</div>';
    
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    // Google maps navigation
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log('navigate button clicked');
          window.open('https://google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longtitude)
          ;
        });
      });
    });
    this.infoWindows.push(infoWindow);
  }
  

  // Close window
  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  // Configuration of map
  showMap() {
    const location = new google.maps.LatLng(55.641026799774124, 12.081175176483615); 
    const options = {
      center: location,
      zoom: 14.2,
      disableDefaultUI: true,
      mapId: "52c2aeea8cc15822"
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  goToQuiz() {
    console.log("hej");
    this.router.navigate(['/tabs/quizzes']);
  }
}