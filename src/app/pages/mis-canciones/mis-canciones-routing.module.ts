import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCancionesPage } from './mis-canciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisCancionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCancionesPageRoutingModule {}
