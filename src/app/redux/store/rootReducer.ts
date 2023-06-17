import { combineReducers } from '@reduxjs/toolkit';
import checkBoxReducer from '..features/checkBoxSlice';

const rootReducer = combineReducers({
  checkbox: checkBoxReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
