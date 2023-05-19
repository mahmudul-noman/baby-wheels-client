
import { Link } from 'react-router-dom';
import '../../../../src/App';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='text-base font-semibold text-[#666]' to="/">Home</Link>
                            <Link className='text-base font-semibold text-[#666]' to="/allToys">All Toys</Link>
                            <Link className='text-base font-semibold text-[#666]' to="/myToys">My Toys</Link>
                            <Link className='text-base font-semibold text-[#666]' to="/addToys">Add A Toy</Link>
                            <Link className='text-base font-semibold text-[#666]' to="/blog">Blogs</Link>
                        </ul>
                    </div>
                    <Link to='/' className='flex items-center'>
                        <img className='w-20' src='https://i.ibb.co/gtt9pKd/transportation-concept-with-car-removebg-preview.png' alt="" />
                        <p className="lg:text-2xl text-sm font-bold bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text">Baby Wheels</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-7">
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/">Home</Link>
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/allToys">All Toys</Link>
                        {
                            user ?
                                <div className='space-x-7'>
                                    <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/myToys">My Toys</Link>
                                    <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/addToys">Add A Toy</Link>
                                </div>
                                : ''

                        }
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/blog">Blogs</Link>
                    </ul>
                </div>



                <div className="navbar-end space-x-3">
                    <div className='flex items-center'>
                        {
                            user ?
                                <div className='flex items-center'>
                                    <div className='mr-3'>

                                        <img title={user?.displayName} src={user?.photoURL} className='w-14 h-14 border-2 border-sky-400 p-2 rounded-full object-cover' alt="" />
                                    </div>
                                    <Link onClick={logOut} className="btn btn-outline border-0 hover:bg-[#11d6e1] text-white bg-pink-600 tracking-widest">Logout</Link>
                                </div>
                                :
                                <Link to="/login" className="btn btn-outline border-0 text-white bg-[#11d6e1] hover:bg-pink-600 tracking-widest">Log in</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;