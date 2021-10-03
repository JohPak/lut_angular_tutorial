import { Component, OnInit } from '@angular/core';

// import hero.ts
import { Hero } from '../hero';

// DELETE this for now
// import { HEROES } from '../mock-heroes';

// USE service instead:
import { HeroService } from '../hero.service';

@Component({
  //selector name is the one which goes as a tag in app.component.html
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  
  // make hero an object instead
  hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };
    heroes: Hero[] = [];

  // This method assigns the clicked hero from the template to the component's selectedHero
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService) {}


  ngOnInit() {
    this.getHeroes();
  }

}
