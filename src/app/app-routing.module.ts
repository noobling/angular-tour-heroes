import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  exports: [
      RouterModule
  ]
})

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

export class AppRoutingModule { }
