import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css']
})
export class SpyComponent implements OnInit {

  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor( ) {
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      //this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    //this.logger.tick();
  }
  reset() {
    //this.logger.log('-- reset --');
    this.heroes = [];
    //this.logger.tick();
  }

  ngOnInit() {
  }

}
