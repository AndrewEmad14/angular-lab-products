import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ServiceApi } from '../service-api';

@Component({
    selector: 'app-product-details',
    imports: [RatingModule, FormsModule],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css',
    })
    export class ProductDetails implements OnInit{
    protected readonly id = input.required<number>();
    protected readonly product = signal<Product | undefined>(undefined);
    protected readonly serviceApi = inject(ServiceApi);
    error: string | null = null;


    ngOnInit() {
        this.fetchProduct();
    }

    fetchProduct() {
        this.error = null;

        this.serviceApi.getProductById(this.id()).subscribe({
        next: (data) => {
            this.product.set(data);
        },
        error: (err) => {
            this.error = 'Failed to load products';
            console.error(err);
        },
        });
    }
}
