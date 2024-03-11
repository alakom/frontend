import {createSlice} from '@reduxjs/toolkit';

interface StartState {
    isBool: boolean;
}

const initialState: StartState = {
    isBool: false,
}
export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
        getIsBool(state){
            state.isBool = !state.isBool;
        },
    },
})

export const {getIsBool} = testSlice.actions
export default testSlice.reducer;