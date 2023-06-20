import { combineReducers } from '@reduxjs/toolkit';
import checkBoxReducer from '../features/checkBoxSlice';
import {navTabCategoryReducer, navTabSortReducer } from '../features/navTabsSlice';
// objects
const rootReducer = combineReducers({
  checkbox: checkBoxReducer,
  navtabsort: navTabSortReducer,
  navtabcategory: navTabCategoryReducer
});
console.log(rootReducer)
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
