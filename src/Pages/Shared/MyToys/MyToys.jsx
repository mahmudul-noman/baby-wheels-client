import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    return (
        <div className="py-12">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold text-pink-500 stl2-font tracking-widest mb-6">My Added Toys</h2>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-base">Toy Picture</th>
                                <th className="text-base">Toy Information</th>
                                <th className="text-base">Toy Price</th>
                                <th className="text-base">Available Quantity</th>
                                <th className="text-base">Seller Information</th>
                                <th className="text-base">Action</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                toys.map(toy =>
                                    <tr key={toy._id}>
                                        <th>
                                            <img className="w-24 h-24 object-contain" src={toy.toyPhoto} alt="" />
                                        </th>
                                        <th className="font-normal">
                                            <p className="font-semibold">{toy.toyName}</p>
                                            <p>Category: {toy.toyCategory}</p>
                                            <p>Rating: {toy.toyRating}</p>
                                        </th>
                                        <th>$ {toy.toyPrice}</th>
                                        <th className="font-normal">Available: {toy.quantity}</th>
                                        <th className="font-normal">
                                            <p>Name: {toy.sellerName}</p>
                                            <p>Name: {toy.sellerEmail}</p>
                                        </th>
                                        <th>
                                            <Link><FaEdit className="mb-2 text-3xl text-green-500"></FaEdit></Link>
                                            <Link><FaTrashAlt className=" text-3xl text-red-500"></FaTrashAlt></Link>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;