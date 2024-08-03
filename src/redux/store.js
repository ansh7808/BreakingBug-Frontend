import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
<<<<<<< HEAD
    reducer:{
=======
    reducer:{//replaced = with :
>>>>>>> 9396c534bf06216b53c25eb7308443f13155dcc5
        user: userReducer,
    }
});

export default store;