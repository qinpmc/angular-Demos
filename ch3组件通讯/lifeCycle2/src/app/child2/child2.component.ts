import { Component, OnInit,AfterViewInit,AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,AfterViewInit,AfterViewChecked {

  ngAfterViewInit():void {
    console.log("子组件ngAfterViewInit"); //此方法执行一次，
  }

  ngAfterViewChecked():void {
    console.log("子组件ngAfterViewChecked"); //父组件定时器执行一次，此方法执行一次，先于父组件执行
  }

  constructor() { }

  ngOnInit() {
  }
  greeting(msg:string){
    console.log("say: "+msg);
  }

}
