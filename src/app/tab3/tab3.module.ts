import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    MatExpansionModule
  ],
  declarations: 
  [ Tab3Page ]
})
export class Tab3PageModule {}
