import { ProductType } from "./product-type"

export type CartItemType  =  Omit<ProductType,'entireProduct'> & {inBasketCount: number}