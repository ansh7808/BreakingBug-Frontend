import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    reducer:{//replaced = with :
        user: userReducer,
    }
});

export default store;