import { createSlice } from "@reduxjs/toolkit";

// const initialState = []

const SignInSlice = createSlice({
    name:'signInDetails',
    initialState: {
        data:[],
        isAuthenticated:false
    },
        // initialState,

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
        }
    }
    
})

export const {storeSigninDetails, storeCurrentUser, setAuthentication} = SignInSlice.actions;
export default SignInSlice.reducer;