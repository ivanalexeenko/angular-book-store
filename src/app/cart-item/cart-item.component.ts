import { Component, Input } from '@angular/core';
import { CartItemModel } from '../cartItemModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem = {} as CartItemModel;
}
