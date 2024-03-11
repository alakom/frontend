import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {testSlice} from "../slices/testSlice";
import {tableApi} from "../api/tableApi";

export const store = configureStore({
    reducer: {
        testReducer: testSlice,
        [tableApi.reducerPath]: tableApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(tableApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch