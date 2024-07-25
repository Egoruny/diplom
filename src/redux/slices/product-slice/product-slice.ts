import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { discountData } from "@utils/data";
import { ProductType } from "@types/product-type";
import { SelectedProductType } from "@types/selected-product-type";

type ProductSliceType = {
	selectedProduct: SelectedProductType | null;
	products: ProductType[];
};

const initialState: ProductSliceType = {
	products: discountData,
	selectedProduct: null,
};

const productSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
		setSelectedProduct(
			state: ProductSliceType,
			action: PayloadAction<SelectedProductType>
		) {
			state.selectedProduct = action.payload;
		},

		toggleItemInBasket(
			state: ProductSliceType,
			action: PayloadAction<string>
		) {
			const id = action.payload;

			if (state.selectedProduct) {
				state.selectedProduct = {
					...state.selectedProduct,
					inBasket: true,
				};
			}

			state.products = state.products.map(product => {
				if (product.id === id) {
					return { ...product, inBasket: !product.inBasket };
				} else {
					return product;
				}
			});
		},
		setCountItem(
			state,
			action: PayloadAction<{ id: string; value: number }>
		) {
			const { id, value } = action.payload;
			state.products = state.products.map(basketItem => {
				if (basketItem.id === id) {
					return { ...basketItem, inBasketCount: value };
				} else {
					return basketItem;
				}
			});
		},
	},
});

export const { setSelectedProduct, toggleItemInBasket, setCountItem } = productSlice.actions;
export default productSlice.reducer;
