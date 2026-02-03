import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  imports: [RatingModule,FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails { 
  id = input.required<number>();
  product = signal<Product | undefined>(undefined);

  async ngOnInit() {
    const response = await fetch('data/mockData.json');
    const data = await response.json();
    this.product.set(data.find((product: Product) => product.id == this.id()));
  }
}
