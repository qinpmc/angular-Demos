import { Directive ,OnInit,OnDestroy} from '@angular/core';
@Directive({selector:'[mySpy]'})
export class SpyDirective implements OnInit,OnDestroy{
  constructor( ){}
  nextId:number = 0;
  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }
  ngOnChanges(){ this.logIt(`ngOnChanges`); }
  private logIt(msg: string) {
    console.log(`Spy #${nextId++} ${msg}`);
  }
}
