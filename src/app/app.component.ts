import { Component } from '@angular/core';
import { BOOKS } from './library-books';
import { BookModel } from './bookModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookShop';
  bookLibrary = BOOKS;
  clickedBookName = "";

  buy(book: BookModel) {
    this.clickedBookName = book.name;
  }
}
