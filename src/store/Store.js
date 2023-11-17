import { configureStore } from "@reduxjs/toolkit";
import FeedSlice from "./FeedSlice";
import SigninSlice from "./SigninSlice";

const Store = configureStore({
    reducer : {
        feedData : FeedSlice,
        signInDetails : SigninSlice
    }
})
export default Store;