import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allToys/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            );
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting toy:', error);
                    });
            }
        });
    };



    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])



    return (
        <div className="py-12">
            <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold text-pink-500 stl2-font tracking-widest mb-6">My Added Toys: {toys.length}</h2>

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
                                        <th className="font-normal">Available: {toy.quantity} PCS</th>
                                        <th className="font-normal">
                                            <p>Name: {toy.sellerName}</p>
                                            <p>Name: {toy.sellerEmail}</p>
                                        </th>
                                        <th>
                                            <Link><FaEdit className="mb-2 text-3xl text-black"></FaEdit></Link>
                                            <button onClick={() => handleDelete(toy._id)}><FaTrashAlt className=" text-3xl text-red-500"></FaTrashAlt></button>
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