import { Component } from '@angular/core';
import { BOOKS } from './library-books';
import { BookModel } from './bookModel';
import { CartModel } from './cartModel';
import { CartItemModel } from './cartItemModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookShop';
  bookLibrary = BOOKS;
  cart = {cartItems: []} as CartModel;

  buy(book: BookModel) {
    if (book.isAvailable) {
      let cartItems = this.cart.cartItems;
      let cartItemsWithBook = cartItems.filter(cartItem => cartItem.book === book);
  
      if (cartItemsWithBook && cartItemsWithBook.length != 0) {
        cartItemsWithBook[0].quantity++;
      } else {
        cartItems.push({index: cartItems.length, quantity: 1, book: book} as CartItemModel);
      }
    }
  }
}
