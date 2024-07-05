import { RootState } from '@redux/configure-store';

export const selectedProductSelect = (state:RootState) => state.product.selectedProduct;