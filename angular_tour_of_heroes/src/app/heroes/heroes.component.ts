import { Component, OnInit } from '@angular/core';

// import hero.ts
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';

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
    heroes = HEROES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
