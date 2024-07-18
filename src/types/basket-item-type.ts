import { ProductType } from "./product-type"

export type BasketItemType  =  Omit<ProductType,"characteristics" | "colors" | "isAvalible" | "inBasket">