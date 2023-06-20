import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import App from './App';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/backend" element={<App />} />
            <Route path="/frontend" element={<App />} />
            <Route path="/qa" element={<App />} />
            <Route path="/pm" element={<App />} />
            <Route path="/design" element={<App />} />
        </Route>
    )
);
