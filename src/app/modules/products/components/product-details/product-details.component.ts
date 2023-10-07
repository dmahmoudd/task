import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../../services/product-details.service';
import { productModel } from '../../models/products.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private ProductService: ProductDetailsService,
    private fb: FormBuilder
  ) {}

  form!: FormGroup;
  product!: Partial<productModel>;
  defaultCount: number = 1;

  ngOnInit(): void {
    this.form = this.fb.group({
      rating: this.fb.array([]),
    });
    this.ProductService.prodDEtails.subscribe({
      next: (res) => {
        if (res) {
          this.product = res;
          this.pushToFormArray(res.rating);
        }
      },
      error: () => {},
    });
  }

  getFormArray(form: any) {
    return form?.controls;
  }

// get rating formname as form array
  get rating() {
    return this.form.get('rating') as FormArray;
  }

  pushToFormArray(rates: string) {
    (this.form?.controls['rating'] as FormArray).push(this.fb.control(rates));
  }

// change the count of items selected 
  changeCount(count:string){
    if(count=='decrement' && this.defaultCount>=1){
      this.defaultCount--
    }
    else if(count=='increment'){
      this.defaultCount++
    }
  }

// add items to my cart
  addToCart(pName:productModel){
    this.product.num=this.defaultCount
    this.ProductService.addToCart$.next(pName)

    const productExistInCart = this.ProductService.getproducts().find((prod:any)=>{
      if(prod.ProductName==pName.ProductName){
        return prod
      }
    }) // find product by name
    if (!productExistInCart) {
      this.ProductService.productsInCart.push({...this.product}); // enhance "porduct" opject with "num" property
      console.log(this.ProductService.productsInCart)
      return;
    }
 
    productExistInCart.num += 1;
  }
}
