import { Component ,ViewChild ,OnInit,AfterViewInit,AfterViewChecked } from '@angular/core';
import {Child2Component} from "./child2/child2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked  {

  title = 'lifeCycle1';

  greeting:string = "父组件的greeting";

  user:{name:string} = {name:"父组件的userName=Tom"};

  @ViewChild("child2_1")
  child2_1:Child2Component;

  ngOnInit():void{
    setInterval(() =>{
      this.child2_1.greeting("父组件调用子组件child2的greeting方法");
    })

  }
  ngAfterViewInit():void {
    console.log("父组件ngAfterViewInit");
  }

  ngAfterViewChecked():void {
    console.log("父组件ngAfterViewChecked");
  }
}
