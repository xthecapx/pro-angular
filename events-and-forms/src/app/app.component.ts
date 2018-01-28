import { Component, ApplicationRef } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  model: Model = new Model();
  targetName: string = "Kayak";
  counter: number = 1;
  private dataSource: SimpleDataSource;
  private products: Product[];

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;

    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getData().forEach(p => this.products.push(p));
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }
}
