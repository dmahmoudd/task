import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../../services/product-details.service';
import { productModel } from '../../models/products.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 
  constructor(private ProductService:ProductDetailsService, private fb:FormBuilder){}
  form!:FormGroup
  product!:productModel
  ngOnInit(): void {
    this.form = this.fb.group({
      rating: this.fb.array([]),
    });
    this.ProductService.prodDEtails.subscribe({
      next:(res)=>{
        if(res){
          this.product=res
          this.pushToFormArray(res.rating)
        }
      },
      error:()=>{}
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
  
}
