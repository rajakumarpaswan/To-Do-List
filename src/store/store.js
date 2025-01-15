import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import ApiReducer from "./slices/ApiSlice";
import taskReducer from "./slices/taskSlice";
const store = configureStore({
    reducer:{
        auth : authReducer,
        weather : ApiReducer,
        tasks : taskReducer
    }
});

export default store;