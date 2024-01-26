import { configureStore } from "@reduxjs/toolkit";

import userReducer  from './userSlice';

const stroe = configureStore({
    reducer: {
        users: userReducer
    }
})

export default stroe;