'use client'



import {createSlice, PayloadAction } from '@reduxjs/toolkit'

/* interface NavTabState {
    activeTab: number;
} */

const initialState: NavTabState = {
    activeTab: 0
}


const navTabSlice = createSlice({
  name: "navtab",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, { payload }/* : PayloadAction<number> */) => {
      state.activeTab = payload;
    },
    
  },
});

export const {setActiveTab} = navTabSlice.actions;
export default navTabSlice.reducer;