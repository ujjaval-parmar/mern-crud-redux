import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },

    reducers: {

        getUsers: (state, action)=>{
            state.users = action.payload;
        },

        addUser: (state, action)=>{
            state.users.push(action.payload);
        },

        deleteUser: (state, action)=>{
           state.users =  state.users.filter(user=> user._id !== action.payload)
        }



    }

});


export const { getUsers, addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

