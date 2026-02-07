import { Component, inject, input } from '@angular/core';
import { Product } from '../model/product';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ServiceCartItem } from '../service-cart-item';


@Component({
  selector: 'app-product-card',
  imports: [RatingModule, FormsModule,],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
    product = input<Product>();
    private cartService = inject(ServiceCartItem);
    
    addToCart(event:Event){
      event.stopPropagation()
      event.preventDefault();
      if(typeof this.product() ){
        this.cartService.addToCart({id:this.product()!.id ,count: 1})
      }
      
    }
}
