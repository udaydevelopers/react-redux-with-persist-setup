// src/store.js
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistedReducer from './reducers'; // Assume you have a root reducer

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

