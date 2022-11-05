import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import AuthProvider from './components/AuthProvider';
import About, { loader as aboutLoader } from './views/About';
import ErrorPage from './views/ErrorPage';
import Home, { loader as homeLoader } from './views/Home';
import Index from './views/Index';
import Login from './views/Login';
import Root from './views/Root';
import '../assets/css/layout.css';
import '../assets/css/header.css';
import '../assets/css/post.css';
import '../assets/css/login.css';
import '../assets/css/error-page.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: 'about',
                loader: aboutLoader,
                element: <About />
            },
            {
                path: 'home',
                loader: homeLoader,
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
