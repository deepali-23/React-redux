import {configureStore} from "@reduxjs/toolkit";
import useReducer from "../Reducer/userReducer";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
export default configureStore({
    reducer:{
        user:useReducer,
    },
}, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));