import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisGamePageRoutingModule } from './regis-game-routing.module';

import { RegisGamePage } from './regis-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisGamePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisGamePage]
})
export class RegisGamePageModule {}
