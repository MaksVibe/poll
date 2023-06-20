import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://poll-api-4t6v.onrender.com';

export const fetchTechs = createAsyncThunk(
    'fetchTechs',
    async (query, thunkAPI) => {
        try {
            const { data } = await axios.get(`/${query}`);
            return { query, data };
        } catch ({ message }) {
            return thunkAPI.rejectWithValue(message);
        }
    }
);

function makeid(length) {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
}

export const addTechnology = createAsyncThunk(
    'addTechnology',
    async (props, thunkAPI) => {
        try {
            const { data } = await axios.post(`/${props.query}`, {
                id: makeid(20),
                name: props.body,
                amount: 0,
            });

            if (data.code === 400) {
                toast.warn(`${data.data}`, {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            } else if (data.code === 201)
                toast.success(`${data.data}`, {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
        } catch ({ message }) {
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const addAmount = createAsyncThunk(
    'addAmount',
    async ({ query, id }, thunkAPI) => {
        try {
            const { data } = await axios.get(`/${query}/${id}`);
            await axios.put(`/${query}/${id}`, {
                spec: query,
                data: data.data,
            });
        } catch ({ message }) {
            return thunkAPI.rejectWithValue(message);
        }
    }
);
