import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleSignIn = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                // setSuccess ('')
                setSuccess('Login Successfully');
                console.log(user);
            })
            .catch(error => setError(error.message))
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setSuccess('Login Successful with Google')
                // setUser(user)
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="hero min-h-screen mx-auto">
            <div className="hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/BKRjyfF/17465926-2007-i039-019-cyber-security-spyware-data-protection-isometric-set-06.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
                    <h1 className='text-center text-4xl text-pink-600 font-bold'>Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                                <label className="label">
                                    {/* <a className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <p className='text-sm font-extrabold text-green-600'>{success}</p>
                            <p className='text-sm font-extrabold text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="text-md tracking-widest btn border-0 bg-gradient-to-r from-pink-400 to-yellow-500">Login</button>
                            </div>
                        </form>
                        <div>
                            <button onClick={handleGoogleSignIn} className='btn border-0 btn-block flex items-center bg-gradient-to-r from-green-700 to-yellow-600 tracking-widest'>Login With Google <span className='ml-4 text-2xl'><FaGoogle></FaGoogle></span></button>
                        </div>
                        <p className='font-semibold mt-5'>Don't have an account? <Link to='/register' className='text-rose-600'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;