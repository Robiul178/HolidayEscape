import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'
import { FiLogOut } from 'react-icons/fi';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        <li><Link className="btn btn-ghost normal-case text-xl" to="/courses/:id">COURSES</Link></li>
                                    </a>
                                </li>
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                            </ul>
                        </div>
                        <Link to='/' className=" text-2xl">
                            <div>
                                <h1>HolidayEscape</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/services/:id">SERVICE</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='user-info'>
                            {
                                user?.uid ?
                                    <div className="avatar">
                                        <div className="w-8 rounded">
                                            <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                        <button><Link to='/myreview'>My Review</Link> </button>
                                        <button onClick={logOut} className="btn ml-2 btn-outline"><FiLogOut /></button>
                                    </div>
                                    :
                                    <>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;