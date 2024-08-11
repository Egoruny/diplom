import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { discountData } from "@utils/data";
import { ProductType } from "@types/product-type";
import { SelectedProductType } from "@types/selected-product-type";
import { getProductTypes,getDiscountProduct,getPoductById,getPoductByCatalogId } from "@redux/async-actions";


type CatalogType = {
	id:number
	name:string
}

type ProductSliceType = {
	catalog:CatalogType[] 
	selectedProduct: SelectedProductType | null;
	products: ProductType[];
};

const initialState: ProductSliceType = {
	catalog:[],
	products: [],
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
			action: PayloadAction<number>
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
			action: PayloadAction<{ id: number; value: number }>
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

	extraReducers:(builder) => {
		builder.addCase(getProductTypes.fulfilled,(state,action) => {
			state.catalog = action.payload
		})
		builder.addCase(getDiscountProduct.fulfilled,(state,action) => {
			state.products = action.payload
		})
		builder.addCase(getPoductById.fulfilled,(state,action) => {
			state.selectedProduct = action.payload
		})
		builder.addCase(getPoductByCatalogId.fulfilled,(state,action) => {
			state.products = action.payload
		})
	}
});

export const { setSelectedProduct, toggleItemInBasket, setCountItem } = productSlice.actions;
export default productSlice.reducer;
