import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice/product-slice";

export const store = configureStore({
	reducer: combineReducers({
		product: productSlice,
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
