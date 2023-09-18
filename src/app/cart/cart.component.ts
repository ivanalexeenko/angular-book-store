import { Component, Input } from '@angular/core';
import { CartModel } from '../cartModel';
import { CartItemModel } from '../cartItemModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() cart = {} as CartModel;

  increaseItemQuantity(cartItem: CartItemModel) {
    if (this.cart.cartItems.includes(cartItem)) {
      cartItem.quantity++;
    }
  }

  decreaseItemQuantity(cartItem: CartItemModel) {
    if (this.cart.cartItems.includes(cartItem)) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      }
    }
  }

  removeItem(cartItem: CartItemModel) {
    if (this.cart.cartItems.includes(cartItem)) {
      let indexToRemove = this.cart.cartItems.indexOf(cartItem);

      if (indexToRemove !== -1) {
        this.cart.cartItems.splice(indexToRemove, 1);
      }
    }
  }
}
