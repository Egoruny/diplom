import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type orderingSliceState = {
	totalPrice:number
}


const initialState:orderingSliceState = {
	totalPrice:0,
};

const orderingSlice = createSlice({
	name: "basketSlice",
	initialState,
	reducers: {
		setTotalPrice (state:orderingSliceState,action:PayloadAction<number>) {
			state.totalPrice = action.payload
		}
}});

export const { setTotalPrice } = orderingSlice.actions;

export default orderingSlice.reducer;
