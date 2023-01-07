import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CardEventComponent } from '../card-event/card-event.component';
import { CarouselComponent } from '../carousel/carousel.component';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule 
  ],
  declarations: [HomePage, CarouselComponent, CardEventComponent]
})
export class HomePageModule {}
