import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        // validate
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Ensure string has two uppercase letters.');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Ensure string has one special case letter.');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Ensure string has two digits.')
            return;
        }


        const updateUser = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log("User Name Updated");
                })
                .catch(error => setError(error.message))
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                setSuccess('')
                event.target.reset();
                setSuccess('User Created Successfully');
                updateUser(result.user, name, photo);
                console.log(user);
            })
            .then(error => setError(error.message))
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/BKRjyfF/17465926-2007-i039-019-cyber-security-spyware-data-protection-isometric-set-06.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
                    <h1 className='text-center text-4xl text-pink-600 font-bold'>Register</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-base">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered" required />
                            </div>
                            <p className='text-sm font-extrabold text-green-600'>{success}</p>
                            <p className='text-sm font-extrabold text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="text-md tracking-widest btn border-0 bg-gradient-to-r from-pink-400 to-yellow-500">Register</button>
                            </div>
                        </form>
                        <p className='font-semibold mt-5'>Already have an account? <Link to='/login' className='text-green-600'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;