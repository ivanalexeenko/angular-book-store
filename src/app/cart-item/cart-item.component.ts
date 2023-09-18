import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItemModel } from '../cartItemModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem = {} as CartItemModel;

  @Output() decreaseQuantityEvent = new EventEmitter<CartItemModel>;
  @Output() increaseQuantityEvent = new EventEmitter<CartItemModel>;
  @Output() removeEvent = new EventEmitter<CartItemModel>;

  onQuantityDecrease(cartItem: CartItemModel) {
    this.decreaseQuantityEvent.emit(cartItem);
  }

  onQuantityIncrease(cartItem: CartItemModel) {
    this.increaseQuantityEvent.emit(cartItem);
  }

  onRemove(cartItem: CartItemModel) {
    this.removeEvent.emit(cartItem);
  }
}
