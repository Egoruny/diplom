import { RootState } from '@redux/configure-store';

export const selectedProductSelect = (state:RootState) => state.productSlice.selectedProduct;
export const productsSelect = (state:RootState) => state.productSlice.products;