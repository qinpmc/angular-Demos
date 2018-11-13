import { Component, OnInit,Input,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input()
  greeting:string;

  @Input()
  user:{name:string}

  message:string ="child 初始message";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges):void {
    console.log(JSON.stringify(changes, null, 4));
  }

}
