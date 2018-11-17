import { Component, OnInit,AfterContentInit,AfterContentChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements AfterContentInit,AfterContentChecked,AfterViewInit {
  ngAfterContentInit():void {
    console.log("子组件投影内容初始化完毕---ngAfterContentInit");
  }

  ngAfterContentChecked():void {
    console.log("子组件投影内容变更检测完毕---ngAfterContentChecked");
  }

  ngAfterViewInit():void {
    console.log("子组件视图内容初始化完毕---ngAfterViewInit");
  }

  constructor() { }


}
