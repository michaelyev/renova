import { combineReducers } from '@reduxjs/toolkit';
import checkBoxReducer from '../features/checkBoxSlice';
import navTabsSlice from '../features/navTabsSlice';
// objects
const rootReducer = combineReducers({
  checkbox: checkBoxReducer,
  navtab: navTabsSlice
});
console.log(rootReducer)
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
