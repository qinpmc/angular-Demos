import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  constructor(private router:Router){

  }
  toShopDetails(){
  // 和  [routerLink]='["/shop",99]' 传参一样，通过 this.routeInfo.snapshot.params["id"];获取参数
  this.router.navigate(["/shop",98]);
  }
}
