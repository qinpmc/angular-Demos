import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId:number;
  constructor(private routeInfo:ActivatedRoute) {  // 注入ActivatedRoute
  }
  ngOnInit() {
    //第一种获取参数---在查询参数中传递数据
    this.productId = this.routeInfo.snapshot.queryParams["id"];



  }
}
