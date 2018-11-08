import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";
import {ShopComponent} from "./shop/shop.component";


const routes: Routes = [
  { path: '', redirectTo:"/home",pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
