import { AfterViewInit,
  ViewChild,
  OnDestroy,
  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdTabGroup } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Product, ProductService } from '../shared/services';


@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {

    @ViewChild(MdTabGroup) mdTabGroup: MdTabGroup;

    private readonly categories = [
      'all',
      'featured',
      'latest',
      'sport'
    ];

  products: Observable<Product[]>;
  constructor(private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router) {
    this.products = this.route.params
    // Parameters list below uses the ES6 feature called destructuring.
    .switchMap(({category}) => {
      return category === 'all' ?
        this.productService.getAll() :
        this.productService.getCategory(category);
    });
  }

  onTabChange(tabIndex: number) {
    const category = this.categories[tabIndex];
    this.router.navigate([category], { relativeTo: this.route.parent });
  }

  ngAfterViewInit() {
    const category = this.route.snapshot.params['category'];
    // this.mdTabGroup.selectedIndex = this.categories.indexOf(category);
  }
}