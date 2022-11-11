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
import MyReview from '../componants/MyReview/MyReview';
// import DisplayReview from '../componants/Review/DisplayReview';

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
                // {
                //     path: '/displayreview',
                //     element: <DisplayReview></DisplayReview>,
                //     loader: () => fetch('https://assignment11-server-robiul178.vercel.app/reviews')
                // },
                {
                    path: '/services/:id',
                    element: <Service></Service>,
                    loader: ({ params }) => fetch(`https://assignment11-server-robiul178.vercel.app/services/${params.id}`)
                },
                {
                    path: '/seemore/:id',
                    element: <SeeMore></SeeMore>,
                    loader: ({ params }) => fetch(`https://assignment11-server-robiul178.vercel.app/services/${params.id}`)
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
                    path: '/myreview',
                    element: <MyReview></MyReview>
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