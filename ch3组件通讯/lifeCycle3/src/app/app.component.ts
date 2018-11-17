import { Component  ,OnInit,AfterViewInit,AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit,AfterContentChecked,AfterViewInit  {
  ngAfterContentInit():void {
    console.log("父组件投影内容初始化完毕---ngAfterContentInit");
  }

  ngAfterContentChecked():void {
    console.log("父组件投影内容变更检测完毕---ngAfterContentChecked");
  }
  ngAfterViewInit():void {
    console.log("父组件视图内容初始化完毕---ngAfterViewInit");
  }


/*
  父组件投影内容初始化完毕---ngAfterContentInit
  父组件投影内容变更检测完毕---ngAfterContentChecked
  子组件投影内容初始化完毕---ngAfterContentInit
  子组件投影内容变更检测完毕---ngAfterContentChecked
  子组件视图内容初始化完毕---ngAfterViewInit
  父组件视图内容初始化完毕---ngAfterViewInit
  core.js:13689 Angular is running in the development mode. Call enableProdMode() to enable the production mode.
  父组件投影内容变更检测完毕---ngAfterContentChecked
  子组件投影内容变更检测完毕---ngAfterContentChecked*/
}
