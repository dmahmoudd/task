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
    })
    this.allProductsInCart.forEach((product)=>{
      this.sum+=(product.num||0)*(product.ProductPrice||0)
    })
    
  }

  changeCount(count:string, product:any, index:any){
    console.log(product)
    if(count=='decrement' && product.num>=1){
      this.allProductsInCart[index]==product.num--
      this.sum-=product.ProductPrice
    }
    else if(count=='decrement' && product.num<=0){
      this.allProductsInCart.splice(index,1)
      this.sum-=product.ProductPrice
    }
    else if(count=='increment'){
      this.allProductsInCart[index]==product.num++
      this.sum+=product.ProductPrice
    }
  }
}
