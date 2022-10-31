import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Login from './views/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    }
]);

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
