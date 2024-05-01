// src/persistConfig.js
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todoList'], // only persist the todos state
};

export default persistConfig;
