
import { Link } from 'react-router-dom';
import '../../../../src/App';

const NavBar = () => {

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
                            <Link className='text-base font-semibold text-[#666]' to="/addToys">Add Toys</Link>
                            <Link className='text-base font-semibold text-[#666]' to="/blog">Blog</Link>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-20' src='https://i.ibb.co/gtt9pKd/transportation-concept-with-car-removebg-preview.png' alt="" />
                        <p className="lg:text-xl text-sm font-bold bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text">Baby Wheels</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/">Home</Link>
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/allToys">All Toys</Link>
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/myToys">My Toys</Link>
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/addToys">Add Toys</Link>
                        <Link className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/blog">Blog</Link>
                    </ul>
                </div>



                <div className="navbar-end space-x-3">
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <img src='https://scontent.fdac149-1.fna.fbcdn.net/v/t39.30808-6/347026308_960946755046139_4510150892294380424_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHMrtOuFNal_hOI_msdV1IF_25dw80obsn_bl3DzShuyabVqQlizSSqhBnDBZLCwvzyDsSWH1LiEBoRJMqCYU2w&_nc_ohc=zf6k2IlRcssAX_AJac_&_nc_ht=scontent.fdac149-1.fna&oh=00_AfCLo8HYuTu2XiE-pZveK0J86495W_5YQe2ZEUda_4QEjw&oe=64697A88' className='w-14 h-14 border-2 border-sky-400 p-2 rounded-full object-cover' alt="" />
                        </div>
                        <Link className="btn btn-outline border-0 text-white bg-pink-600 tracking-widest">Logout</Link>
                    </div>
                    <Link to="/login" className="btn btn-outline border-0 text-white bg-[#11d6e1] tracking-widest">Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;