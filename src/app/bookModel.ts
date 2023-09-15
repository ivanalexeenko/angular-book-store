import { Category } from "./category"

export interface BookModel {
    name: string,
    description: string,
    price: number,
    category: Category,
    createDate: number,
    isAvailable: boolean
}