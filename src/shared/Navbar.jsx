import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogout = () => {
        LogOut()
            .then(() => {
            
        })
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-3xl text-[#338573] font-bold"><span>jobei<span className=''>Bridge</span></span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   
                </ul>
            </div>
            <div className="navbar-end gap-5">

                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle bg-blue-800 avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoUR  ?
                                                <img src={user.photoURL} alt="" />
                                                :
                                                <div className='font-bold text-2xl text-white'>{user.email.slice(0, 1)}</div>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName ? user.displayName : user.email}

                                        </a>
                                    </li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                            <Link to="/joblist" className="btn hover:bg-[#338573] hover:text-white">Applied Job</Link>
                            <Link to="/postJob" className="btn text-white bg-[#338573]">Post A Job</Link>
                        </>
                        :
                        <Link to="/login" className="btn hover:bg-[#338573] hover:text-white">Login</Link>

                        
                }
            </div>
        </div>
    );
};

export default Navbar;