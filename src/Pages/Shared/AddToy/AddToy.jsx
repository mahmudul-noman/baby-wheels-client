import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";


const AddToy = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://baby-wheels-server.vercel.app/addToys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            })
        console.log(data)
    };

    const { user } = useContext(AuthContext);



    return (
        <div className="bg-[#ffeef3]">
            <div className="container mx-auto">
                <div className="py-12 text-center">
                    <h2 className="text-4xl font-bold stl2-font text-pink-500 mb-6">Add Your Toy</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="grid grid-cols-2 gap-5">

                            {/* Toy Photo URL  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Toy Photo URL</span>
                                </label>
                                <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue="" {...register("toyPhoto")} />
                            </div>

                            {/* Toy Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Toy Name</span>
                                </label>
                                <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue="" {...register("toyName")} />
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
                                <input required className="input border-0 focus:outline-none shadow" type="number" defaultValue="500" {...register("toyPrice")} />
                            </div>

                            {/* Toy Rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Toy Rating</span>
                                </label>
                                <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue="4.9" {...register("toyRating",
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
                                <input required className="input border-0 focus:outline-none shadow" type="text" defaultValue="15" {...register("quantity")} />
                            </div>

                        </div>

                        {/* Toy Details */}
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Toy Details</span>
                            </label>
                            <textarea required className="input border-0 focus:outline-none shadow" type="text" defaultValue="" {...register("toyDetails")} />
                        </div>


                        <div className="form-control mt-6">
                            <input className="text-lg btn btn-block border-0 bg-gradient-to-r from-pink-400 to-yellow-500 text-white mt-5 tracking-widest" type="submit" value="Add a Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;