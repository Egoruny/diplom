import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice/product-slice";
import orderingSlice from "./slices/ordering-slice/ordering-slice";

export const store = configureStore({
	reducer: combineReducers({
		productSlice,
		orderingSlice,
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
