import { configureStore } from "@reduxjs/toolkit";
import FeedSlice from "./FeedSlice";

const Store = configureStore({
    reducer : {
        feedData : FeedSlice,
    }
})
export default Store;