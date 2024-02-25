import {createSlice} from "@reduxjs/toolkit";
import {initialTabsTypes} from "@/helpers/types/MyTypes";


const initialState: initialTabsTypes = {
    tab: 'About me',
}

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        changeTab(state, action){
            state.tab = action.payload;
        }
    }
})

export const tabAction = tabSlice.actions;
export default tabSlice;