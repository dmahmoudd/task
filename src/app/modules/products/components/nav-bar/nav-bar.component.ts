import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private router: Router,
    private acRoute: ActivatedRoute,
    private prodService: ProductDetailsService
  ) {}
  searchWord!: string;

  querParams = {};

  productcount: number = 0;

  ngOnInit(): void {
    this.querParams = this.acRoute.queryParams.subscribe({
      next: (params) => {
        this.searchWord = params?.['search'];
      },
    });
    this.prodService.addToCart$.subscribe({
      next: (res) => {
        if (Object.keys(res).length !== 0) {
          const products = this.prodService.getproducts().forEach((prod) => {
            this.productcount += prod.countItems || 0;
          });
        }
      },
    });
  }

  sreach() {
    if (this.searchWord) {
      this.prodService.searchInput$.next(this.searchWord);
      this.prodService.searchInput$.pipe(debounceTime(300)).subscribe({
        next: (val: string) => {
          this.router.navigate([], {
            queryParams: { search: this.searchWord },
          });
        },
      });
    } else {
      this.prodService.searchInput$.next('');
    }
  }

  // goToOrderDetails(){
  //   this.router.navigateByUrl('/order-details')
  // }
}
