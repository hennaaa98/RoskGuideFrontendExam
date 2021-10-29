import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutKaffeKildenComponent } from '../components/about-kaffe-kilden/about-kaffe-kilden.component'; //Import Component.

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { AboutSatchmoComponent } from '../components/about-satchmo/about-satchmo.component';
import { AboutKornComponent } from '../components/about-korn/about-korn.component';
import { AboutC48Component } from '../components/about-c48/about-c48.component';
import { AboutVivaldiComponent } from '../components/about-vivaldi/about-vivaldi.component';
import { AboutRibHouseComponent } from '../components/about-rib-house/about-rib-house.component';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule 
  ],
  declarations: [Tab2Page, AboutKaffeKildenComponent, AboutSatchmoComponent, AboutKornComponent, AboutC48Component, AboutVivaldiComponent, AboutRibHouseComponent], // declare the component
  entryComponents: [AboutKaffeKildenComponent, AboutSatchmoComponent, AboutKornComponent, AboutC48Component, AboutVivaldiComponent, AboutRibHouseComponent] // as well as declaring entry component.
})
export class Tab2PageModule {}
