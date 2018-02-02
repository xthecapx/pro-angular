import { Component, ApplicationRef, state } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();
  targetName = 'Kayak';
  counter = 1;
  private dataSource: SimpleDataSource;
  private products: Product[];
  selectedProduct: string;
  newProduct: Product = new Product();
  formSubmitted = false;

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

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }

  getValidationMessages(state: any, thingName?: string) {
    const thing: string = state.path || thingName;
    const messages: string[] = [];

    if (state.errors) {
      for (const errorName in state.errors) {
        if (state.errors.hasOwnProperty(errorName)) {
          switch (errorName) {
            case 'required':
              messages.push(`You must enter a ${thing}`);
              break;
            case 'minlength':
              messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
              break;
            case 'pattern':
              messages.push(`The ${thing} contains illegal characters`);
              break;
          }
        }
      }
    }
    return messages;
  }

  getFormValidationMessages(form: NgForm) {
    const messages: string[] = [];

    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
    });

    return messages;
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
