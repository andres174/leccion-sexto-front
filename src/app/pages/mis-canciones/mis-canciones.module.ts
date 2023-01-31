import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCancionesPageRoutingModule } from './mis-canciones-routing.module';

import { MisCancionesPage } from './mis-canciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCancionesPageRoutingModule
  ],
  declarations: [MisCancionesPage]
})
export class MisCancionesPageModule {}
