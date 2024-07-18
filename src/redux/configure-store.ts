import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice/product-slice";
import basketSlice from "./slices/basket-slice/basket-slice";

export const store = configureStore({
	reducer: combineReducers({
		productSlice,
		basketSlice,
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
