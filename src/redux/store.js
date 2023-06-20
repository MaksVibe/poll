import { configureStore } from '@reduxjs/toolkit';
import { techsReducer } from './techs/techsSlice';
import { inputsReducer } from './inputs/inputsSlice';

export const store = configureStore({
    reducer: {
        specs: techsReducer,
        inputs: inputsReducer,
    },
});
