export type ProductType = {
    id: string,
    productDiscription: string
    price: number
    discount: number
    isAvalible: boolean
    inBasket: boolean
    inBasketCount: number
    imageSrc:string
    characteristics: CharacteristicsType[]
    colors: colortye[],
}

export type CharacteristicsType = {
    left:string
    right:string | number
}

type colortye = {
    color:string
}