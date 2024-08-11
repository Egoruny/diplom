import { ProductType } from "./product-type"

export type BasketItemType  =  Omit<ProductType,"characteristics" | "colors" | "entireProduct" | "inBasket">