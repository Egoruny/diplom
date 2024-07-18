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
		setSelectedProduct(state: ProductSliceType, action:PayloadAction<SelectedProductType>) {
			state.selectedProduct = action.payload;
		},

		setItemInBasket(state:ProductSliceType, action:PayloadAction<string>) {
			const id = action.payload

			if(state.selectedProduct) {
				state.selectedProduct = {...state.selectedProduct,inBasket:true}
			}

			state.products= state.products.map(product => {
				if (product.id === id) {
					return { ...product, inBasket: true };
				} else {
					return product;
				}
			});
		},

		setItemsOutBasket (state,action:PayloadAction<string[]>) {
			const ids = action.payload

			if(state.selectedProduct) {
				state.selectedProduct = {...state.selectedProduct,inBasket:false}
			}

			state.products= state.products.map(product => {
				if (ids.includes(product.id)) {
					return { ...product, inBasket: false };
				} else {
					return product;
				}
			});
		}
	},
});

export const { setSelectedProduct,setItemInBasket,setItemsOutBasket } = productSlice.actions;
export default productSlice.reducer;
