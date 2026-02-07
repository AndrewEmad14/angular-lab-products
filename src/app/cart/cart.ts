import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { Product } from '../model/product';
import { EmptyCart } from '../empty-cart/empty-cart';
import { ServiceCartItem } from '../service-cart-item';
import { ServiceApi } from '../service-api';
import { CartItem } from '../model/cartItem';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { count } from 'rxjs';
import { item } from '@primeuix/themes/aura/breadcrumb';

@Component({
  selector: 'app-cart',
  imports: [EmptyCart],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  protected readonly cartItems = signal<Product[]>([]);
  protected cartService = inject(ServiceCartItem);
  private destroyRef = inject(DestroyRef);
  error: string | null = null;
  serviceApi = inject(ServiceApi);
  ngOnInit() {
    const cartItemsFromService = this.cartService.data();

    cartItemsFromService.forEach((item) => {
      this.fetchProduct(item.id);
    });
    console.log('cartItems');
    console.log('cartItems from service:', cartItemsFromService);
  }

  fetchProduct(id: number) {
    this.error = null;
    this.serviceApi
      .getProductById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.cartItems.update((products) => [...products, data]);
        },
        error: (err) => {
          this.error = 'Failed to load products';
          console.error(err);
        },
      });
  }
  getCount(id: number): number {
    const cartItemsFromService = this.cartService.data();
    let item = cartItemsFromService.find((item) => item.id == id);
    if (item) {
      return item.count;
    } else {
      return 0;
    }
  }
  addItem(id: number) {
    const cartItem = this.cartService.data().find((item) => item.id === id);
    const productItem = this.cartItems().find((item) => item.id === id);

    if (cartItem && productItem && cartItem.count <= productItem.stock) {
      this.cartService.addToCart({ id: id, count: 1 });
    }
  }
  decreaseItemCount(id: number) {
    if (this.cartService.data().find((item) => item.id === id)?.count === 1) {
      this.removeItem(id);
    } else {
      this.cartService.decreaseCount(id);
    }
  }
  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    this.cartItems.update((items) => items.filter((item) => item.id !== id));
  }
  getTotalPrice(): number {
    return this.cartItems().reduce((total, item) => {
      const count = this.getCount(item.id);
      return total + item.price * count;
    }, 0);
  }
}
