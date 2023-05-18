// import './Footer.css';

import { FaEnvelope, FaFacebookSquare, FaInstagram, FaMapMarked, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#ffeef362]">
            <div className="container mx-auto py-20">
                <div className="lg:flex gap-5 justify-around">
                    <div>
                        <img className="w-32" src="https://i.ibb.co/gtt9pKd/transportation-concept-with-car-removebg-preview.png" alt="" />
                        <p className="text-base font-semibold">Come visit The Little Dino Center for yourself <br /> so you can tour the rooms and meet some of our educators.</p>
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
    );
};

export default Footer;