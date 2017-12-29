import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    StaticDataSource
  ]
  declarations: []
})
export class ModelModule { }
