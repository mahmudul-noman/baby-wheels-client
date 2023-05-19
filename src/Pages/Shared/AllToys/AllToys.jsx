import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const AllToys = () => {

    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then((result) => {
                setToys(result);
            })
    }, [])

    return (
        <div className="bg-[#ffeef3d2] py-12">
            <div className="container mx-auto">
                <h2 className="text-center font-bold text-pink-400 text-4xl stl2-font mb-6 tracking-wider">Our Popular Toys Collection</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-sm tracking-widest text-pink-700">SL</th>
                                <th className="text-sm tracking-widest text-pink-700">Seller Name</th>
                                <th className="text-sm tracking-widest text-pink-700">Toy Name</th>
                                <th className="text-sm tracking-widest text-pink-700">Toy Category</th>
                                <th className="text-sm tracking-widest text-pink-700">Toy Price</th>
                                <th className="text-sm tracking-widest text-pink-700">Available Quantity</th>
                                <th className="text-sm tracking-widest text-pink-700">Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy, index) =>
                                    <tr key={toy._id}>
                                        <th>{index + 1}</th>
                                        <td>{toy.sellerName}</td>
                                        <td>{toy.toyName}</td>
                                        <td>
                                            {
                                                toy.toyCategory === 'microbus' ? 'Micro Bus' :
                                                    toy.toyCategory === 'firecar' ? 'Fire Car' :
                                                        toy.toyCategory === 'bike' ? 'Motor Bike' : ''
                                            }
                                        </td>
                                        <td>$ {toy.toyPrice}</td>
                                        <td>{toy.quantity} PCS</td>
                                        <td><Link to=''><button className="tracking-widest btn border-0 bg-gradient-to-r from-yellow-400 to-yellow-500">Details</button></Link></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;