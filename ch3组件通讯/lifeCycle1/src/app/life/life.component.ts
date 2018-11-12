import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,
  AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges,Input} from '@angular/core';
let logIndex:number = 1; //注意声明到此处
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})

export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input()
  name:string;
  logIt(msg:string){
    console.log(`#${logIndex++} ${msg}`);
  }

  constructor() {
    this.logIt("name属性在构造函数里的值是："+name);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

  ngOnChanges(changes:SimpleChanges):void {
   let name = changes["name"].currentValue;
    this.logIt("name 在ngOnchanges 里面的值是："+name);
  }

  ngDoCheck():void {
    this.logIt("ngDoCheck");
  }

  ngAfterContentInit():void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterContentChecked():void {
    this.logIt("ngOnInit");
  }

  ngAfterViewInit():void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked():void {
    this.logIt("ngAfterViewChecked");
  }

  ngOnDestroy():void {
    this.logIt("ngOnDestroy");
  }


  /*
   #1 name属性在构造函数里的值是：
   #2 name 在ngOnchanges 里面的值是：lifeCycle1
   #3 ngOnInit
   #4 ngDoCheck
   #5 ngAfterContentInit
   #6 ngOnInit
   #7 ngAfterViewInit
   #8 ngAfterViewChecked
   core.js:13689 Angular is running in the development mode. Call enableProdMode() to enable the production mode.
   #9 ngDoCheck
   #10 ngOnInit
   #11 ngAfterViewChecked
   */
}
