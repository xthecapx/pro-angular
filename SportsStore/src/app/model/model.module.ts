import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart
  ],
  declarations: []
})
export class ModelModule { }
