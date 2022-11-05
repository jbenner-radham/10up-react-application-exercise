import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import AuthProvider from './components/AuthProvider';
import About from './views/About';
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';
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
                path: 'about',
                element: <About />
            },
            {
                path: 'home',
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
