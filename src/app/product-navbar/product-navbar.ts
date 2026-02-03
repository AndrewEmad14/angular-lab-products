import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-product-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-navbar.html',
  styleUrl: './product-navbar.css',
})
export class ProductNavbar {

}
