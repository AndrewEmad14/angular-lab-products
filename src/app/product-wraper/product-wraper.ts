import { Component, OnInit, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../model/product';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceApi } from '../service-api';

@Component({
  selector: 'app-product-wraper',
  imports: [ProductCard, RouterLinkActive, RouterLink],
  templateUrl: './product-wraper.html',
  styleUrl: './product-wraper.css',
})
export class ProductWraper implements OnInit {
  productList = signal<Product[]>([]);
  error: string | null = null;

  constructor(private apiService: ServiceApi) {}

  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct() {
    this.error = null;

    this.apiService.getProduct().subscribe({
      next: (data) => {
        this.productList.set(data.products);
        console.log(this.productList)
        
      },
      error: (err) => {
        this.error = 'Failed to load products';
        console.error(err);
      },
    });
  }
}
