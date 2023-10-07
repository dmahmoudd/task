import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { productModel } from '../../models/products.model';
import data from '../../../../../assets/dummyData/products';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetailsService } from '../../services/product-details.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products!: productModel[];

  form!: FormGroup;
  rates = 0;

  constructor(private fb: FormBuilder, private router:Router, private ProductService:ProductDetailsService) {}
  ngOnInit(): void {
    this.products = data.data;
    this.form = this.fb.group({
      rating: this.fb.array([]),
    });
    this.ProductService.searchInput$.subscribe({
      next:(res)=>{
        if(res){
          this.products=[]
          data.data.find((searchedProd)=>{
            if(searchedProd.ProductName==res){
              this.products.push(searchedProd)
            }
          })
        }
        else{
          this.products = data.data;
        }
      }
    })
  }

  ngAfterViewInit(){
    data.data?.forEach((data)=>{
      this.pushToFormArray(data.rating)
    })
  }

  getFormArray(form:any){
    return form?.controls
  }
  
  get rating() {
    return this.form.get('rating') as FormArray;
  }

  pushToFormArray(rates:string) {
    (this.form?.controls['rating'] as FormArray).push(this.fb.control(rates));
  }
  
  openDetails(product:productModel){
    this.router.navigateByUrl('allproducts/products/'+product.ProductId)
    this.ProductService.prodDEtails.next(product)
  }
}
