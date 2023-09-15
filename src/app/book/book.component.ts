import { Component } from '@angular/core';
import { BookModel } from '../bookModel';
import { Category } from '../category';
import { BOOKS } from '../library-books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  books = BOOKS;

  onBuy(book: BookModel): void {
    
  }
}
