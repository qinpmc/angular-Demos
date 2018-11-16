import { Component, OnInit,AfterViewInit,AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,AfterViewInit,AfterViewChecked {

  ngAfterViewInit():void {
    console.log("子组件ngAfterViewInit");
  }

  ngAfterViewChecked():void {
    console.log("子组件ngAfterViewChecked");
  }

  constructor() { }

  ngOnInit() {
  }
  greeting(msg:string){
    console.log("say: "+msg);
  }

}
