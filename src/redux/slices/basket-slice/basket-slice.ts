import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketItemType } from "@types/basket-item-type";

type BasketSliceType = {
	basketItems:BasketItemType[]
}

const initialState:BasketSliceType= {
	basketItems: [],
};

const basketSlice = createSlice({
	name: "basketSlice",
	initialState,
	reducers: {
		setBasketItem(state, action:PayloadAction<BasketItemType>) {
			state.basketItems = [...state.basketItems, action.payload];
		},
		setCountItem(
			state,
			action: PayloadAction<{ id: string; value: number }>
		) {
			const { id, value } = action.payload;

			state.basketItems = state.basketItems.map(basketItem => {
				if (basketItem.id === id) {
					return { ...basketItem, inBasketCount: value };
				} else {
					return basketItem;
				}
			});

			
		},
		deleteItems ( state,action:PayloadAction<string[]>) {
			const deleteItemsIds = action.payload

			state.basketItems = state.basketItems.filter(({id}) => !deleteItemsIds.includes(id))
		}
	},
});

export const { setBasketItem,setCountItem,deleteItems } = basketSlice.actions;

export default basketSlice.reducer;
