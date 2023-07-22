import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';

import { ProductsRoutingModule } from './products-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductsComponent } from './pages/products/products.page';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CartComponent, FiltersComponent,ProductsComponent, OrderDetailsComponent, ProductDetailsComponent, NavBarComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule
  ],
})
export class ProductsModule {}
