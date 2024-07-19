import { RootState } from '@redux/configure-store';
import { createSelector } from '@reduxjs/toolkit';

export const selectedProductSelect = (state:RootState) => state.productSlice.selectedProduct;
export const productsSelect = (state:RootState) => state.productSlice.products;
export const getBasketItemsSelect = createSelector(
    productsSelect,
    (product) => product.filter(({inBasket}) => inBasket)
)