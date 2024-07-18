import { calcDiscount } from "./discount/calc-discount";

 export const calculateTotalPrice = function (data) {
    const totalPrice = data.reduce((acc,item) => {
        return acc + calcDiscount(item.price,item.discount) * item.inBasketCount
    },0)
    return totalPrice
 }
