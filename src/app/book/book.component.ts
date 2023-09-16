import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../bookModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() books: BookModel[] = [];

  @Output() onBuyBookEvent = new EventEmitter<BookModel>;

  onBuy(book: BookModel) {
    this.onBuyBookEvent.emit(book);
  }
}
