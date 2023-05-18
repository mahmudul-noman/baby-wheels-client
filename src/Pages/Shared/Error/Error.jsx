
import { FaAngleLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div>
            <img className='object-cover w-full max-h-screen relative' src="https://i.ibb.co/Cv1vMKN/21586054-Na-Nov-26.jpg" alt="" />


            <button className="btn bg-[#ff487a] border-0 text-white font-bold tracking-widest absolute bottom-20 left-1/2" onClick={() => window.history.back()}>
            <FaAngleLeft></FaAngleLeft> &nbsp; Go Back
            </button>
        </div>
    );
};

export default Error;