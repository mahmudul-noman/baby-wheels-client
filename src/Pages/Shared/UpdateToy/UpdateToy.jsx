import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateToy = () => {

    const toyData = useLoaderData()
    const { _id, toyPhoto, toyName, sellerName, sellerEmail, toyPrice, toyRating, quantity, toyDetails } = toyData;
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleUpdate = (data) => {
        fetch(`https://baby-wheels-server.vercel.app/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Toy Update Successfully',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Jossss'
                    })
                }
            })
    }


    return (
        <div className="bg-gradient-to-r from-pink-200 to-yellow-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl text-pink-600 font-extrabold tracking-wider mb-6">Update Your Product : <span className="stl2-font text-pink-500"> {toyName}</span></h2>

                <form onSubmit={handleSubmit(handleUpdate)}>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="grid grid-cols-2 gap-5">

                        {/* Toy ID  */}
                        <div className="form-control hidden">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy ID</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue={_id} {...register("_id")} />
                        </div>

                        {/* Toy Photo URL  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy Photo URL</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue={toyPhoto} {...register("toyPhoto")} />
                        </div>

                        {/* Toy Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy Name</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue={toyName} {...register("toyName")} />
                        </div>

                        {/* Seller Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Seller Name</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue={user?.displayName} {...register("sellerName")} />
                        </div>

                        {/* Seller Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Seller Email</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="email" defaultValue={user?.email} {...register("sellerEmail")} />
                        </div>

                        {/* Toy Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy Category</span>
                            </label>
                            <select className="input" {...register("toyCategory")}>
                                <option value="microbus">Micro Bus</option>
                                <option value="firecar">Fire & Rescue</option>
                                <option value="bike">Motor Bike</option>
                            </select>
                        </div>

                        {/* Toy Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy Price</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="number" defaultValue={toyPrice} {...register("toyPrice")} />
                        </div>

                        {/* Toy Rating */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy Rating</span>
                            </label>
                            <input required placeholder="Write Ratings From 0 to 5" className="input border-0 focus:outline-none shadow" type="text" defaultValue={toyRating} {...register("toyRating",
                                // For Rating Limitations: 0 to 5, I'm using Chat GPT.
                                {
                                    pattern: {
                                        value: /^(?:[0-4](\.\d{1,2})?|5(\.0{1,2})?)$/,
                                        message: "Please Write Your Rating Between 0 and 5"
                                    }
                                })}
                            />
                            {errors.toyRating && (
                                <span className="text-lg text-red-700 mt-1 text-start">{errors.toyRating.message}</span>
                            )}
                        </div>

                        {/* Available Quantity */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Available Quantity</span>
                            </label>
                            <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue={quantity} {...register("quantity")} />
                        </div>

                    </div>

                    {/* Toy Details */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Toy Details</span>
                        </label>
                        <textarea required className="input border-0 focus:outline-none shadow" type="text" defaultValue={toyDetails} {...register("toyDetails")} />
                    </div>


                    <div className="form-control mt-6">
                        <input className="text-lg btn btn-block border-0 bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest" type="submit" value="Update a Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;