import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	selectedProduct: null;
};

const initialState: State = {
	selectedProduct: null,
};

const productSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
		setSelectedProduct(state: State, action) {
			state.selectedProduct = action.payload;
		},
	},
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
