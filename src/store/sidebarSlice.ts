import { SidebarState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: SidebarState = {
    isOpen: false,
};

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setSidebarState: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
    },
});

export const { setSidebarState } = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;