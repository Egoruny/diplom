import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "@types/basket-item-type";
import { login,createItem,deleteItemByIds,makeOrder } from "@redux/async-actions";

type StateType = {
	cartItems: CartItemType[];
	cartError:boolean
};

const initialState: StateType = {
	cartError:false,
	cartItems: [],
};

const cartSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
		setCartItem(state, action: PayloadAction<CartItemType>) {
			state.cartItems = [...state.cartItems, action.payload];
		},

		setCountItem(
			state,
			action: PayloadAction<{ id: number; value: number }>
		) {
			const { id, value } = action.payload;
			state.cartItems = state.cartItems.map(basketItem => {
				if (basketItem.id === id) {
					return { ...basketItem, inBasketCount: value };
				} else {
					return basketItem;
				}
			});
		},
		deleteItem(state, action) {
			const deleteItemId = action.payload;
			const filtredCart = state.cartItems.filter(
				({ id }) => deleteItemId !== id
			);
			state.cartItems = filtredCart;
		},
	},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			const { divices } = action.payload;
			state.cartItems = divices;
		});
		builder.addCase(createItem.fulfilled, (state, action) => {
			state.cartItems = action.payload;
		});
		builder.addCase(deleteItemByIds.fulfilled, (state, action) => {
			state.cartItems = action.payload;
		});
		builder.addCase(makeOrder.fulfilled, (state) => {
			state.cartError = false
			state.cartItems = [];
		});
		builder.addCase(makeOrder.rejected, (state) => {
			state.cartError = true;
		});
	},
});

export const { setCartItem, setCountItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
