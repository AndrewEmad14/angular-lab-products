import { Component, input } from '@angular/core';
import { Product } from '../model/product';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-card',
  imports: [RatingModule, FormsModule,],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
    product = input<Product>();
    
}
