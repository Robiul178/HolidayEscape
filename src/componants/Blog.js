import React from 'react';
import './CSS/Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog text-left border p-4 mt-20">
                <h1 className="text-xl mb-3">Q1. What is cors?</h1><p>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>
                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.

                    <br /><br /> Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs.
                    <br /><br />
                    Lets start by listing the various ways through which we can achieve authentication,<br />
                    <ul>
                        <li>Cookie-Based authentication</li>
                        <li>Token-Based authentication</li>
                        <li>Third party access(OAuth, API-token)</li>
                        <li>OpenId</li>
                        <li>SAML</li>
                    </ul>
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q3.How does the private route work?</h1>
                <p>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q4. What is Node? How does Node work?</h1>
                <p>
                    Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node. <br /><br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;