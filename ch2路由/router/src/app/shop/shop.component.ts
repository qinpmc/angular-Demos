import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private shopID :number;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    //第二种获取参数---在路由的路径中传递数据
    //this.shopID = this.routeInfo.snapshot.params["id"];
    this.routeInfo.params.subscribe((params:Params) =>{
      this.shopID = params["id"];
    })

  }
}
