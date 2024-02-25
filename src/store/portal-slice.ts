import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HandmadeItemType, initialPortalTypes, ProjectType} from "@/helpers/types/MyTypes";


const initialState: initialPortalTypes = {
    active: false,
    portalData: null,
    type: null,
}

const portalSlice = createSlice({
    name: 'portal',
    initialState,
    reducers: {
        setPortalOnProject(state, action: PayloadAction<ProjectType>){
            state.active = true;
            state.type = 'Project';
            state.portalData = action.payload as ProjectType;
        },
        setPortalOnHandmadeItem(state, action: PayloadAction<HandmadeItemType>){
            state.active = true;
            state.type = 'HandmadeItem';
            state.portalData = action.payload as HandmadeItemType;
        },
        setPortalOnHandmadeNav(state){
            state.active = true;
            state.type = 'HandmadeNav';
            state.portalData = null;
        },
        turnOffPortal(state){
            state.active = false;
            state.type = null;
        }
    }
})

export const { setPortalOnProject, setPortalOnHandmadeItem, setPortalOnHandmadeNav, turnOffPortal } = portalSlice.actions
export default portalSlice.reducer