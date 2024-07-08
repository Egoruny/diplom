import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	selectedProduct: null,
};

const productSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
		setSelectedProduct(state, action) {
			state.selectedProduct = action.payload;
		},
	},
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
