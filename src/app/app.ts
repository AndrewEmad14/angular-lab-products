import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductWraper } from './product-wraper/product-wraper';
import { ProductNavbar } from './product-navbar/product-navbar';
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { Register } from './register/register';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductWraper,ProductNavbar,Login,Cart,Register ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-lab-products');
 
}
