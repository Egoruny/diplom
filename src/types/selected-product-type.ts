import { ProductType } from "./product-type";

type WithoutEntireProduct = Omit<ProductType, "entireProduct">
export type SelectedProductType = WithoutEntireProduct & {info:InfoType}



export type InfoType = {
    title:string
    description:string | number
}

