import { BookModel } from "./bookModel";

export interface CartItemModel {
    index: number;
    book: BookModel,
    quantity: number;
}