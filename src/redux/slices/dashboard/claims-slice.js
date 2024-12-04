import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    claims: [],
    dispatchedClaims: [],
    damagedParts: []
}

const ClaimsSlice = createSlice({
    name: "claims",
    initialState,
    reducers:{
        setClaims: (state, action) => {
            state.claims = action.payload
        },
        setDispatchedClaims: (state, action) => {
            state.dispatchedClaims = action.payload
        },
        setDamageParts: (state, action) => {
            state.damagedParts = action.payload
        },

    }
});
export default ClaimsSlice.reducer;


