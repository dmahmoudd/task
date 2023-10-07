import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './pages/products/products.page';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutDetailsComponent } from './components/checkout-details/checkout-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'order-details',component:OrderDetailsComponent},
  {path:'checkout', component:CheckoutDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
