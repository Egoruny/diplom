import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../axios/axios";


export const getProductTypes = createAsyncThunk('getProductTypes', async (_,thunkApi) => {
    const {data} = await  instance.get('type')
    return thunkApi.fulfillWithValue(data);
})
export const getDiscountProduct = createAsyncThunk('getDiscountProduct', async (_,thunkApi) => {
    const {data} = await  instance.get('device')
    return thunkApi.fulfillWithValue(data);
})
export const getPoductById = createAsyncThunk('getPoductById', async (id,thunkApi) => {
    const {data} = await  instance.get(`device/${id}`)
    return thunkApi.fulfillWithValue(data);
})
export const getPoductByCatalogId = createAsyncThunk('getPoductByCatalogId', async (catalogId,thunkApi) => {
    const {data} = await  instance.get(`type/${catalogId}`)
    return thunkApi.fulfillWithValue(data);
})

