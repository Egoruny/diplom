import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "@redux/async-actions";


const initialState = {
    userId:null,
	isAuth:false,
    isError:false,
    isSuccess:false
};

const authSlice = createSlice({
	name: "productSlice",
	initialState,
	reducers: {
        setIsAuth(state,action:PayloadAction<boolean>) {
            state.isAuth = action.payload
            state.isSuccess = false
        }
	},
    extraReducers:(builder) => {
        builder.addCase(login.fulfilled,(state,action) => {
            const {user} = action.payload
            console.log(user)
            state.userId = user
            state.isAuth = true
            state.isError = false
            state.isSuccess = true
        })
        builder.addCase(login.rejected,state => {
            state.isAuth = false
            state.isError = true
            state.isSuccess = false
        })
    }
});

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;