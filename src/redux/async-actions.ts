import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../axios/axios";
import { CartItemType } from "@types/basket-item-type";


type GetPoductByCatalogIdType = {
	paramsData: Record<string, string[][]>;
	catalogId?: string;
};

type RegistrationType = {
	email:string
	password:string
	cartItems:CartItemType[]
}

type LoginType = Omit<RegistrationType,"cartItems">

export const getProductTypes = createAsyncThunk(
	"getProductTypes",
	async (_, thunkApi) => {
		const { data } = await instance.get("type");
		return thunkApi.fulfillWithValue(data);
	}
);
export const getDiscountProduct = createAsyncThunk(
	"getDiscountProduct",
	async (_, thunkApi) => {
		const { data } = await instance.get("device");
		return thunkApi.fulfillWithValue(data);
	}
);
export const getPoductById = createAsyncThunk(
	"getPoductById",
	async (id: string, thunkApi) => {
		const { data } = await instance.get(`device/${id}`);
		return thunkApi.fulfillWithValue(data);
	}
);
export const getPoductByCatalogId = createAsyncThunk(
	"getPoductByCatalogId",
	async ({ catalogId, paramsData }: GetPoductByCatalogIdType, thunkApi) => {
		const filterId = Object.keys(paramsData);
		const value = Array.from(Object.values(paramsData)).flat().flat();
		const { data } = await instance.get(`device/catalog/${catalogId}`, {
			params: { value, filterId },
		});
		return thunkApi.fulfillWithValue(data);
	}
);

export const getFilters = createAsyncThunk(
	"getfilters",
	async (catalogId: string, thunkApi) => {
		const { data } = await instance.get(`filter/${catalogId}`);
		return thunkApi.fulfillWithValue(data);
	}
);

export const registration = createAsyncThunk(
	"registration",
	async ({email,password,cartItems}:RegistrationType, thunkApi) => {
		try {
			const { data } = await instance.post("/user/registration", {
				email,
				password,
				cartItems
			});
			return thunkApi.fulfillWithValue(data);
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const login = createAsyncThunk(
	"login",
	async ({email,password}:LoginType, thunkApi) => {
		try {
			const { data } = await instance.post("/user/login", {
				email,
				password,
			});
			return thunkApi.fulfillWithValue(data);
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);

export const createItem = createAsyncThunk(
	"createItem",
	async ({itemId,id}, thunkApi) => {
		try {
			const { data } = await instance.post("/basket", {
				itemId,
				id,
			});
			return thunkApi.fulfillWithValue(data);
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const deleteItemByIds = createAsyncThunk(
	"deleteItemByIds",
	async ({userId,deviceId}, thunkApi) => {
		try {
			const { data } = await instance.delete("/basket",{params: { userId, deviceId }} );
			return thunkApi.fulfillWithValue(data);
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const makeOrder = createAsyncThunk(
	"makeOrder",
	async ({items,userData}, thunkApi) => {
		try {
			const { data } = await instance.post("/order", {items,userData});

		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
export const searchAction  = createAsyncThunk(
	"search",
	async (text, thunkApi) => {
		console.log(text)
		try {
			const { data } = await instance.post("/device/search", {text});
			return thunkApi.fulfillWithValue(data);
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
