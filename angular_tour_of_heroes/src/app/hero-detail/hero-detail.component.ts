import { Component, OnInit, Input } from '@angular/core';
// lets import the hero, so html template can use it
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero?: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
