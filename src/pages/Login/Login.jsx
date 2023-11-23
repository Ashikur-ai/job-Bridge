import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, user } = useContext(AuthContext);
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const user = { name, password };
        console.log(user);
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then()
            .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>jobBridge | Login</title>
            </Helmet>
            <div className='bg-[#F4F5F7;] py-5'>
                <p className='text-center text-4xl font-semibold'>Login</p>
            </div>
            <div className="card shrink-0 w-2/5 mx-auto border my-10">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='name' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        
                        <input className="btn text-white bg-[#338573]" type="submit" value="Login" />
                    </div>
                    <p className='text-2xl text-center'>Not a member? <Link to="/register"><span className='font-semibold'>Register</span></Link></p>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn m-3'>Google</button>
            </div>
        </div>
    );
};

export default Login;