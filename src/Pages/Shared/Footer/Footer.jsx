
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#ffeef362]">
                <div className="container mx-auto py-20">
                    <div className="grid lg:grid-cols-4 gap-3 justify-center space-y-8 lg:space-y-0">
                        <div>
                            <img className="w-32" src="https://i.ibb.co/gtt9pKd/transportation-concept-with-car-removebg-preview.png" alt="" />
                            <p className="lg:text-2xl text-sm font-bold bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text">Baby Wheels</p>
                            <p className="hidden lg:block text-base font-semibold">Come visit The Little Dino Center for yourself <br /> so you can tour the rooms and meet some of our educators.</p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-[#ff487a] font-bold text-2xl stl2-font tracking-widest">#Category</span>
                            <p className="text-base font-semibold">Kids Collections</p>
                            <p className="text-base font-semibold">Born Baby Collections</p>
                            <p className="text-base font-semibold">Trading Collection</p>
                            <p className="text-base font-semibold">Best Collection</p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-[#ff487a] font-bold text-2xl stl2-font tracking-widest">#Our Contacts</span>
                            <p className="text-base font-semibold flex items-center"><FaMapMarkerAlt className="mr-1 text-lg text-[#ff487a]"></FaMapMarkerAlt> Dhaka, Bangladesh</p>
                            <p className="text-base font-semibold flex items-center"><FaPhoneAlt className="mr-1 text-lg text-[#ff487a]"></FaPhoneAlt>01626382361</p>
                            <p className="text-base font-semibold flex items-center"><FaEnvelope className="mr-1 text-lg text-[#ff487a]"></FaEnvelope> mhnoman75@gmail.com</p>
                        </div>

                        <div className="space-y-4">
                            <span className="text-[#ff487a] font-bold text-2xl stl2-font tracking-widest">#Social Links</span>
                            <div className="flex gap-5 text-3xl text-[#ff487a]">
                                <p><FaFacebookSquare></FaFacebookSquare></p>
                                <p><FaInstagram></FaInstagram></p>
                                <p><FaTwitterSquare></FaTwitterSquare></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-400 py-5 text-center text-sm lg:text-lg font-semibold">
                <p>@ 2023 | All Right Reserved by <span className="stl2-font tracking-widest">Mahmudul Hasan</span></p>
            </div>
        </div>
    );
};

export default Footer;