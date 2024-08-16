import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@types/product-type";
import { SelectedProductType } from "@types/selected-product-type";
import {
	getProductTypes,
	getDiscountProduct,
	getPoductById,
	getPoductByCatalogId,
	getFilters,
	searchAction 
} from "@redux/async-actions";

type CatalogType = {
	id: number;
	name: string;
};

type FiltersType = {
	name: string;
	id: number;
	value: string;
};

type SearchOptionsType = {
	id: number;
	name: string;
};

type ProductSliceType = {
	catalog: CatalogType[];
	selectedProduct: SelectedProductType | null;
	products: ProductType[];
	filters: FiltersType[];
	searchOptions: SearchOptionsType[];
};

const initialState: ProductSliceType = {
	catalog: [],
	products: [],
	selectedProduct: null,
	filters: [],
	searchOptions: [],
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

		clearOptions(state) {
			state.searchOptions = []
		}
	},

	extraReducers: builder => {
		builder.addCase(getProductTypes.fulfilled, (state, action) => {
			state.catalog = action.payload;
		});
		builder.addCase(getDiscountProduct.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		builder.addCase(getPoductById.fulfilled, (state, action) => {
			state.selectedProduct = action.payload;
		});
		builder.addCase(getPoductByCatalogId.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		builder.addCase(getFilters.fulfilled, (state, action) => {
			state.filters = action.payload;
		});
		builder.addCase(searchAction .fulfilled, (state, action) => {
			state.searchOptions = action.payload;
		});
	},
});

export const { setSelectedProduct,clearOptions } = productSlice.actions;
export default productSlice.reducer;
