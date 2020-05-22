import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastresePageRoutingModule } from './cadastrese-routing.module';

import { CadastresePage } from './cadastrese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastresePageRoutingModule
  ],
  declarations: [CadastresePage]
})
export class CadastresePageModule {}
