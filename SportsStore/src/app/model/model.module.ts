import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository
  ],
  declarations: []
})
export class ModelModule { }
