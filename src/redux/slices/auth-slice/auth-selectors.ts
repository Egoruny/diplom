import { RootState } from '@redux/configure-store';

export const getIsAuth = (state:RootState) => state.authSlice.isAuth
export const getIsSucces = (state:RootState) => state.authSlice.isSuccess
export const getUser = (state:RootState) => state.authSlice.userId