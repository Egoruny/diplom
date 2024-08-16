import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterStateType } from "@types/filter-state-type";

const initialState: FilterStateType = {
	data: {},
};

const filterSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
		setData(state, action: PayloadAction<{ id: number; value: string[] }>) {
			const { id, value } = action.payload;

			if (state.data[id] && !value.length) {
				delete state.data[id];
			} else {
				state.data[id] = [value];
			}
		},
	},
});

export const { setData } = filterSlice.actions;

export default filterSlice.reducer;
