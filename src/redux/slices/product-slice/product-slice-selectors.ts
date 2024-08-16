import { RootState } from '@redux/configure-store';

export const selectedProductSelect = (state:RootState) => state.productSlice.selectedProduct;
export const productsSelect = (state:RootState) => state.productSlice.products;
export const productTypeSelect = (state:RootState) => state.productSlice.catalog
export const filtersSelect = (state:RootState) => state.productSlice.filters
export const optionsSelect = (state:RootState) => state.productSlice.searchOptions
