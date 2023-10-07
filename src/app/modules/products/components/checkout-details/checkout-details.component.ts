import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../../services/product-details.service';
import { productModel } from '../../models/products.model';

@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.scss']
})
export class CheckoutDetailsComponent implements OnInit{
  constructor(private productService :ProductDetailsService){}
  allProductsInCart:productModel[]=[]
  userAddress:any =localStorage.getItem('userAddress') 
  userName:any =localStorage.getItem('userName') 
  total:number=0
  ngOnInit(): void {
    this.allProductsInCart=this.productService.getproducts()
    this.productService.sum$.subscribe((res)=>{
      this.total=res
    })
   
  }
}
