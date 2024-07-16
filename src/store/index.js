import { configureStore } from "@reduxjs/toolkit";
import airportSlice from "../features/Search/Airports.slice";

const store = configureStore({
    reducer: airportSlice.reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;
