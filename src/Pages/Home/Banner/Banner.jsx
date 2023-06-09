import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="relative">
            <img className="lg:h-[730px] h-full w-full object-cover" src="https://i.ibb.co/SxpSnvK/bannerr.png" alt="" />
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" className="absolute inset-0 flex flex-col justify-center items-start lg:items-start lg:px-10 ml-8 lg:ml-32">
                <h1 className="lg:text-9xl text-4xl font-bold bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text">Welcome</h1>
                <h1 style={{ textShadow: '5px 2px 4px rgba(255, 255, 255, 0.5)' }} className="lg:text-3xl lg:mb-4 font-bold tracking-widest text-[#6d6a6a]">best car toys of <span className="text-pink-600 italic">baby wheels</span></h1>
                <h1 className="text-pink-600 text-lg font-semibold stl2-font italic tracking-widest hidden lg:block">Awesome Toys <br /> Makes Your Baby</h1>
                <button className="border-dotted hover:bg-[#06959d] border-0 btn bg-pink-700 mt-5 tracking-widest">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;
