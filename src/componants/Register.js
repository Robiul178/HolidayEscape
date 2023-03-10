import React, { useContext, useState } from 'react';
import { AuthContext } from './Context/UseContext';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        console.log('register hoyce')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        createUser(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>HolidayEscape-Register</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Here!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        {error}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="flex justify-center">
                        <button onClick={handleGoogleSignIn} className="btn" > <FaGoogle /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;