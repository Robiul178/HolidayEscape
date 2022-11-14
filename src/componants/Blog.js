import React from 'react';
import { Helmet } from 'react-helmet';
import './CSS/Blog.css'

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>HolidayEscape-Blog</title>
            </Helmet>
            <div className="blog text-left border p-4 mt-20">
                <h1 className="text-xl mb-3">Q1. What is cors?</h1><p className='text-lg'>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p> <br />
                <p className="text-lg">There are five practical differences between SQL and NoSQL:</p>
                <ol>
                    <li>Language</li>
                    <li>Scalability</li>
                    <li>Structure</li>
                    <li>Properties</li>
                    <li>Support and communities</li>
                </ol>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q2. What is JWT, and how does it work?</h1>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <p>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q3.What is the difference between javascript and NodeJS?</h1>
                <p>
                    <span className='font-semibold'> 1. NodeJS :</span>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                </p><br />
                <p>
                    <span className='font-semibold'> 2. JavaScript : </span>
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>
            </div>
            <div className="blog text-left border p-4 mt-6">
                <h1 className="text-xl mb-3">Q4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
            </div>
        </div>
    );
};

export default Blog;