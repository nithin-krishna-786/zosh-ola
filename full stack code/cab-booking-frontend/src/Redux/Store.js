'use client'
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import authReducer from "./Auth/Reducer";
import rideReducer from "./Ride/Reducer";
import driverReducer from "./Driver/Reducer";
import usersReducer from "./User/Reducer";



const rootReducers=combineReducers({
    auth:authReducer,
    ride:rideReducer,
    driver:driverReducer,
    user:usersReducer
});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))