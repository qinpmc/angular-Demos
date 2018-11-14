import { Component, OnInit,Input,OnChanges,SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {


  @Input()
  greeting:string;

  @Input()
  user:{name:string}

  message:string ="child 初始message";
  oldUsername:string;
  isChanged:boolean;
  noChangeCount:number;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log(JSON.stringify(changes, null, 4));
  }
  ngDoCheck():void {
    if(this.user.name !==this.oldUsername){
      this.isChanged = true;
      console.log("ngDoCheck: user.name 从"+this.oldUsername+"变成了"+this.user.name);
      this.oldUsername = this.user.name;
    }
    if(this.isChanged){
      this.noChangeCount =0;
    }else{
      this.noChangeCount +=1;
      console.log("ngDoCheck: user.name没变化，但ngDoCheck 已被调用"+this.noChangeCount+"次数");
    }
    this.isChanged = false;
  }

}
