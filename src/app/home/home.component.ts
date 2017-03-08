import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

    private readonly categories = [
    'all',
    'featured',
    'latest',
    'sport'
    ];

  products: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    this.products = this.productService.getCategory(category);
  }
}