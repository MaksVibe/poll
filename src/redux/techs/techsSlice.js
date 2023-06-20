import { createSlice } from '@reduxjs/toolkit';
import { fetchTechs } from './techsOperations';

const initialState = {
    departament: null,
    stack: null,
    error: null,
};

export const techsSlice = createSlice({
    name: 'techsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTechs.pending, state => {
                state.departament = null;
                state.stack = null;
                state.error = null;
            })
            .addCase(fetchTechs.fulfilled, (state, { payload }) => {
                state.departament = payload.query;
                state.stack = payload.data.data;
                state.error = null;
            })
            .addCase(fetchTechs.rejected, (state, { payload }) => {
                state.departament = null;
                state.stack = null;
                state.error = payload;
            });
    },
});

export const techsReducer = techsSlice.reducer;
