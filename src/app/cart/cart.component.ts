import { Component, Input } from '@angular/core';
import { CartModel } from '../cartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() cart = {} as CartModel;
}
