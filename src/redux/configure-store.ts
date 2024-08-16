import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice/product-slice";
import orderingSlice from "./slices/ordering-slice/ordering-slice";
import filterSlice from "./slices/filters-slice/filter-slice";
import authSlice from "./slices/auth-slice/auth-slice";
import cartSlice from "./slices/cart-slice/cart-slice";

export const store = configureStore({
	reducer: combineReducers({
		productSlice,
		orderingSlice,
		filterSlice,
		authSlice,
		cartSlice,
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
