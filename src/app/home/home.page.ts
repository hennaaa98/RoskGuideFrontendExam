import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LocationComponent } from '../components/location/location.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private locCtrl: PopoverController ) {}
  ngOnInit(){

  }
async _openLocation(ev: any){
  //console.log("Location")
  const location =await  this.locCtrl.create({
  
    component:LocationComponent,
    event: ev
    
  })
  return await location.present()
}
}
