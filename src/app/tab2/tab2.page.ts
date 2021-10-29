import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'; //import the popover controller

import { AboutKaffeKildenComponent } from '../components/about-kaffe-kilden/about-kaffe-kilden.component'; // import the component.
import { AboutSatchmoComponent } from '../components/about-satchmo/about-satchmo.component';
import { AboutKornComponent } from '../components/about-korn/about-korn.component';
import { AboutC48Component } from '../components/about-c48/about-c48.component';
import { AboutVivaldiComponent } from '../components/about-vivaldi/about-vivaldi.component';
import { AboutRibHouseComponent } from '../components/about-rib-house/about-rib-house.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //We inject the popover controller to the constructor 
  constructor(public popoverController: PopoverController) {

  }


  ngOnInit(){
  } 


  // User clicked on 'About this app' * And add the asynch clicked method.
  async aboutKaffeKilden() {
    const popover = await this.popoverController.create({ //first we create the popover, 
      component: AboutKaffeKildenComponent, //it expected a component property, we use our kaffeKilden
      translucent: true // state we want it to be translucent.
    });
    await popover.present(); //now it's ready to be called.
  }

   
  async aboutSatchmo() {
    const popover = await this.popoverController.create({ 
      component: AboutSatchmoComponent,
      translucent: true 
    });
    await popover.present(); 
  }

  async aboutKorn() {
    const popover = await this.popoverController.create({ 
      component: AboutKornComponent,
      translucent: true 
    });
    await popover.present(); 
  }

  async aboutC48() {
    const popover = await this.popoverController.create({ 
      component: AboutC48Component,
      translucent: true 
    });
    await popover.present(); 
  }

  async aboutVivaldi() {
    const popover = await this.popoverController.create({ 
      component: AboutVivaldiComponent,
      translucent: true 
    });
    await popover.present(); 
  }

  async aboutRibhouse() {
    const popover = await this.popoverController.create({ 
      component: AboutRibHouseComponent,
      translucent: true 
    });
    await popover.present(); 
  }


}
