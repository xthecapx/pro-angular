import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from "./store/store.module";
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { CheckoutComponent } from "./store/checkout/checkout.component";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart",
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: "app/admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
      },
      {
        path: "**",
        redirectTo: "/store"
      }
    ])
  ],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
