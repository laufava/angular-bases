import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './list/hero-list.component';

@NgModule({
  exports: [
    HeroComponent,
    HeroListComponent
  ],
  declarations: [
    HeroComponent,
    HeroListComponent
  ],
  imports:[
    CommonModule,
  ]
})
export class HeroesModule { }
