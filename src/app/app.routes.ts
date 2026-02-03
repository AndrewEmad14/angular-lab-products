import { Routes } from '@angular/router';
import { ProductWraper } from './product-wraper/product-wraper';
import { Register } from './register/register';
import { Login } from './login/login';
import { Cart } from './cart/cart';
import { NotFound } from './not-found/not-found';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  
  {path:'product-wraper',component:ProductWraper},
  {path:'',component:ProductWraper},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'cart',component:Cart},
  { path: 'product-details/:id', component: ProductDetails },
  { path: '**', component: NotFound },

];
