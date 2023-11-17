import { createSlice } from "@reduxjs/toolkit";

// const initialState = []

const SignInSlice = createSlice({
    name:'signInDetails',
    initialState: {
        data:[{username:"1", password:"1"},{username:"its.lakshya_", fullname:"Lakshya Kumar", password:"@123", mobile:3244}],
        currentUserData:{},
        isAuthenticated:false
    },

    reducers:{
        storeSigninDetails:(state, action) => {
            state.data.push(action.payload)
            console.log(state.data[0])
        },
        storeCurrentUser:(state, action)=> {
            state.currentUser = action.payload
        },
        setAuthentication:(state, action) => {
            state.isAuthenticated=action.payload;
        },
        setCurrentUser:(state, action)=> {
            state.currentUserData=action.payload;
        }
    }
    
})

export const {storeSigninDetails, storeCurrentUser, setAuthentication, setCurrentUser} = SignInSlice.actions;
export default SignInSlice.reducer;