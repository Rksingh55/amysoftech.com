import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import testSlice from '../Reducer/testSlice';
import tasksReducer from '../Reducer/testSlice';

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  testconfig: testSlice,
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type IRootState = ReturnType<typeof rootReducer>;
