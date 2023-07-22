import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  productsInCart:productModel[]=[]
  constructor() { }

  prodDEtails=new BehaviorSubject<Partial<productModel>>({})
  searchInput$=new BehaviorSubject('')
  addToCart$=new BehaviorSubject<Partial<productModel>>({})

  setproduct(products:productModel){
    this.productsInCart.push(products) 
  }
  getproducts(){
    return this.productsInCart
  }
}
