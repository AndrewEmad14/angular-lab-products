import { Injectable, signal } from '@angular/core';
import { CartItem } from './model/cartItem';

@Injectable({
  providedIn: 'root',
})
export class ServiceCartItem {
  data = signal<CartItem[]>([]);

  addToCart(cartItem: CartItem) {
    if (this.data().find((item) => item.id === cartItem.id)) {
      this.data.update(items => items.map(item => {
        if(item.id === cartItem.id){
          return {...item,count:item.count+1}
        }else{
          return item;
        }
      }));
    } else {
      this.data.update((item) => [...item, cartItem]);
    }
  }
  decreaseCount(id:number){
    if (this.data().find((item) => item.id === id)) {
      this.data.update(items => items.map(item => {
        if(item.id === id){
          return {...item,count:item.count-1}
        }else{
          return item;
        }
      }));
    } 
  }
  removeFromCart(id: number) {
    this.data.update((items) => items.filter((item) => item.id !== id));
  }
  clearCart() {
    this.data.set([]);
  }
}
