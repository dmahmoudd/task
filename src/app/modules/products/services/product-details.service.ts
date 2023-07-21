import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor() { }

  prodDEtails=new BehaviorSubject<productModel>({})
}
