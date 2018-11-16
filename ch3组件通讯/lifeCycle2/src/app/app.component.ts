import { Component ,ViewChild ,OnInit,AfterViewInit,AfterViewChecked } from '@angular/core';
import {Child2Component} from "./child2/child2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked  {

  greeting:string = "父组件的greeting";

  @ViewChild("child2_1")
  child2_1:Child2Component;

  ngOnInit():void{
    setInterval(() =>{
      this.child2_1.greeting("父组件调用子组件child2的greeting方法");
    },3000)

  }
  ngAfterViewInit():void {
    console.log("父组件ngAfterViewInit"); //执行一次
    setTimeout(() =>{                       //修改属性，必须写在下一个周期中
      this.greeting = "新的父组件greeting"
    },0)
  }

  ngAfterViewChecked():void {
    console.log("父组件ngAfterViewChecked"); //上文定时器执行一次，此方法执行一次
  }

}
