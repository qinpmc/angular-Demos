import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){  //注入Router

  }
  title = 'routeBase';
  toProduct():void{  //跳转到/product 路由
    this.router.navigate(['/product']);
  }
}
