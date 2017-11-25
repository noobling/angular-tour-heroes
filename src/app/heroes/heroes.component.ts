import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  addHero(name: string, id: number) {
    name = name.trim();
    this.hero = {name: name, id: id};
    this.heroes.push(this.hero);
  }

  deleteHero(delhero: Hero) {
    this.heroes = this.heroes.filter(hero => hero !== delhero);
  }

}
