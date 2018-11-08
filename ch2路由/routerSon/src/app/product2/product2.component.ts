import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
  private  id:number;
  constructor(private routerInfo:ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.params["id"];
   /* this.id =  +this.routerInfo.snapshot.paramMap.get('id'); // 字符 转 数字
   * */
  }
}
