import { createSlice } from "@reduxjs/toolkit";

const airportSlice = createSlice({
    name: "airports",
    initialState: {
        cities: new Map(),
        airports: [],
        selectedTo: "",
        selectedFrom: "",
        counters: {
            adult: 0,
            child: 0,
            infant: 0
        },
        selectedClass: ""
    },
    reducers: {
        updateAirports: (state, action) => {
            state.airports = action.payload;
        },
        updateSelectedTo: (state, action) => {
            state.selectedTo = action.payload
        },
        updateSelectedFrom: (state, action) => {
            state.selectedFrom = action.payload
        },
        toggleSelectedValues: (state) => {
            const selectedFrom = state.selectedFrom;
            state.selectedFrom = state.selectedTo;
            state.selectedTo = selectedFrom;
        },
        updateCounters: (state, action) => {
            const { type, value } = action.payload;
            state.counters[type] += value;
        },
        updateSelectedClass: (state, action) => {
            state.selectedClass = action.payload
        }
    }
})

export const { updateAirports,
    updateSelectedFrom,
    updateSelectedTo,
    toggleSelectedValues,
    updateCounters,
    updateSelectedClass
} = airportSlice.actions;
export default airportSlice; 