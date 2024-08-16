import { RootState } from '@redux/configure-store';


export const getValue = (state:RootState) => state.filterSlice.value
export const getFilterId = (state:RootState) => state.filterSlice.filterId