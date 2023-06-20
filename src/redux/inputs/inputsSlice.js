import { createSlice } from '@reduxjs/toolkit';
import { setInputState } from './inputsOperations';

const inputState = {
    value: '',
    isEmpty: false,
    isValid: true,
};

const initialState = {
    frontend: inputState,
    backend: inputState,
    qa: inputState,
    pm: inputState,
    design: inputState,
    error: null,
};

export const inputsSlice = createSlice({
    name: 'inputsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setInputState.pending, state => {
                state.error = null;
            })
            .addCase(setInputState.fulfilled, (state, { payload }) => {
                const { value, departament, isValid, isEmpty } = payload;
                state[departament].value = value;
                state[departament].isEmpty = isEmpty;
                state[departament].isValid = isValid;
                state.error = null;
            })
            .addCase(setInputState.rejected, (state, { payload }) => {
                const { departament, error } = payload;
                state[departament].isEmpty = state.isEmpty;
                state[departament].isValid = state.isValid;
                state.error = error;
            });
    },
});

export const inputsReducer = inputsSlice.reducer;
