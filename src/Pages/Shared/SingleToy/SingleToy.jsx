import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {

    const toy = useLoaderData();
    const { _id, toyPhoto, toyName, sellerName, sellerEmail, toyPrice, toyRating, quantity, toyDetails } = toy;

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl text-pink-600 font-extrabold tracking-wider mb-6">Product Description of : <span className="stl2-font text-pink-500"> {toyName}</span></h2>


                <div className="card lg:card-side">
                    <figure><img className="w-full border-2 p-4 border-pink-200" src={toyPhoto} alt={toyName} /></figure>
                    <div className="card-body">
                        <div className="space-y-3">
                            <h2 className="card-title font-extrabold">{toyName}</h2>
                            <h4 className="font-semibold">{toyDetails}</h4>
                            <h4 className="text-[#11d6e1] text-xl font-bold">On Sale $ {toyPrice} USD</h4>
                            <h4 className="text-green-600 font-extrabold text-lg">In Stock: {quantity} PCS</h4>
                            <h4 className="text-yellow-500 font-bold text-xl flex gap-1 items-center">Ratings: {toyRating} <FaStar></FaStar></h4>
                        </div>
                        <div className="mt-4 space-y-1">
                            <h2 className="card-title font-extrabold text-pink-600">Seller Information :</h2>
                            <h4 className="text-lg font-bold">Seller Name: <span className="font-semibold">{sellerName}</span></h4>
                            <h4 className="text-lg font-bold">Seller Email: <span className="font-semibold">{sellerEmail}</span></h4>
                        </div>
                        <div>
                        <button className="border-dotted border-0 btn bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;