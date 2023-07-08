import {configureStore, combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/lib/persistStore'
import categoriesReducer from './categories/CategoriesSlice';
import productsReducer from './products/ProductsSlice'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
});

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart','user']
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore(
    {
        reducer: persistedReducer,
    }
)

export const persistor = persistStore(store)