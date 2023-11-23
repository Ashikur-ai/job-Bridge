import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { googleSignIn, EmailSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        EmailSignIn(email, password)
            .then(() => {
                {
                    location?.state ? location.state : navigate('/')
            }
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                {
                    location?.state ? location.state : navigate('/')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>jobBridge | Register</title>
            </Helmet>
            <div className='bg-[#F4F5F7;] py-5'>
                <p className='text-center text-4xl font-semibold'>Register</p>
            </div>
            <div className="card shrink-0 w-2/5 mx-auto border my-10">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                        <input className="btn text-white bg-[#338573]" type="submit" value="Register"  />

                    </div>
                    <p className='text-2xl text-center'>Already Have An Account? <Link to="/login"><span className='font-semibold'>Login</span></Link></p>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn m-3'>Google</button>
            </div>
        </div>
    );
};

export default Register;