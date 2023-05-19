import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [searchToy, setSearchToy] = useState("");

    // Filter base on Toy Name
    const searchedToys = toys.filter(toy =>
        toy.toyName.toLowerCase().includes(searchToy.toLowerCase())
    );

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
                <h2 className="text-center font-bold text-pink-400 text-4xl stl2-font mb-4 tracking-wider">Our Popular Toys Collection</h2>
                <div className="overflow-x-auto">

                    <div className="flex justify-center mb-4">
                        <div className="form-control">
                            <div className="input-group">
                                <input onChange={(e) => setSearchToy(e.target.value)} type="text" placeholder="Search by Toy Name" className="input input-bordered" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


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
                                searchedToys.map((toy, index) =>
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