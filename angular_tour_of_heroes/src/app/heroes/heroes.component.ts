import { Component, OnInit } from '@angular/core';

// import hero.ts
import { Hero } from '../hero';

@Component({
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
