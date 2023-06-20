import { createAsyncThunk } from '@reduxjs/toolkit';

export const setInputState = createAsyncThunk(
    'setInputState',
    (props, thunkAPI) => {
        try {
            let matched = props.value
                .split('')
                .every(val => val.match(/[A-Za-z0-9 ]/g));
            const data = {
                departament: props.departament,
                value: props.value,
                isValid: matched,
                isEmpty: props.newTech ? false : props.value.length === 0,
            };
            return data;
        } catch (error) {
            return { departament: props.departament, error };
        }
    }
);
