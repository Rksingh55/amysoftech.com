import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import testSlice from '../Reducer/testSlice';
import tasksReducer from '../Reducer/testSlice';
import clickedCardsSlice from '@/Reducer/clickedCardsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig,  clickedCardsSlice);


const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  testconfig: testSlice,
  tasks: tasksReducer,
  clickedCards: persistedReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;