import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../componants/Home';
import Login from './../componants/Login';
import Register from '../componants/Register';
import Main from '../Layout/Main';
import Blog from '../componants/Blog';
import ReadMore from '../componants/ReadMore/ReadMore';
import NotFound404 from '../componants/NotFound404/NotFound404';
import Service from '../componants/Service/Service';

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
                    element: <Service></Service>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '*',
                    element: <NotFound404></NotFound404>
                },
                {
                    path: '/readmore/:id',
                    element: <ReadMore></ReadMore>,
                    loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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