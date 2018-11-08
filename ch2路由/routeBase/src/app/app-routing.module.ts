import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";

// path 配置中前面不要加 /
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"**",component:Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
