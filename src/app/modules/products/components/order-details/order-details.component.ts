import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../../services/product-details.service';
import { productModel } from '../../models/products.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(private productService :ProductDetailsService){}
  allProductsInCart:productModel[]=[]
  sum:number=0
  ngOnInit(): void {
    this.allProductsInCart=this.productService.getproducts()
    this.allProductsInCart.forEach((product)=>{
      this.sum+=(product.countItems||0)*(product.ProductPrice||0)
    })
    
  }
}
