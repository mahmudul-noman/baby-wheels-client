import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {

    const { _id, toyName, toyPhoto, toyPrice, toyRating } = toy;

    return (
        <div className="">
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className="w-48 h-48 object-contain" src={toyPhoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <h4 className="text-[#11d6e1] text-xl font-bold">On Sale $ <span className="text-[#11d9b1]">{toyPrice}</span> USD</h4>
                    <h4 className="text-yellow-500 font-bold text-xl flex gap-1 items-center">Ratings: {toyRating} <FaStar></FaStar></h4>
                    <div>
                        <Link to={`/singleToy/${_id}`}>
                            <button className="border-dotted border-0 btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;