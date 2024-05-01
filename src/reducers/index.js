// src/reducers/index.js
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    todoList: todoReducer,
});

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);

export default persistedReducer;