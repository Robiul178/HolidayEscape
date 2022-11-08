import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './../componants/Login';
import Register from '../componants/Register';
import Main from '../Layout/Main';
import Blog from '../componants/Blog';
import NotFound404 from '../componants/NotFound404/NotFound404';
import Service from '../componants/Service/Service';
import SeeMore from '../componants/SeeMore/SeeMore';
import Home from '../Layout/Home/Home';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/services/:id',
                    element: <Service></Service>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/seemore/:id',
                    element: <SeeMore></SeeMore>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '*',
                    element: <NotFound404></NotFound404>
                }

            ]
        }

    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;