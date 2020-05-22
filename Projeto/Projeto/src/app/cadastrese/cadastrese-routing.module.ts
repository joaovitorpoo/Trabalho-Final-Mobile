import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastresePage } from './cadastrese.page';

const routes: Routes = [
  {
    path: '',
    component: CadastresePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastresePageRoutingModule {}
