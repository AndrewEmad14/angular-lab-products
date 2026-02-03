import { Component,OnInit, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../model/product';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-wraper',
  imports: [ProductCard,RouterLinkActive,RouterLink],
  templateUrl: './product-wraper.html',
  styleUrl: './product-wraper.css',
})
export class ProductWraper implements OnInit{
    productList = signal<Product[]>([])
    
    async ngOnInit() {
        const response = await fetch('data/mockData.json');
        const data = await response.json();
        this.productList.set(data);
    }
}
