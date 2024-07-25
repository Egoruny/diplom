import { setItemInBasket } from "@redux/slices/product-slice/product-slice"
import { setBasketItem } from "@redux/slices/ordering-slice/basket-slice"
import { useAppDispatch } from "./typed-redux-hooks"
import { BasketItemType } from "@types/basket-item-type";


export const useAddProduct = () => {
const dispatch = useAppDispatch()



const addProductInBasket = (selectedProduct:BasketItemType) => {
    dispatch(setItemInBasket(selectedProduct.id));
    dispatch(setBasketItem(selectedProduct));
};


return {
    addProductInBasket
}
}