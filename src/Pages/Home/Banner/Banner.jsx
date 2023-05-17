
const Banner = () => {
    return (
        <div className="relative">
            <img className="h-[730px] w-full" src="https://i.ibb.co/0cfc19R/Banners-Community-1.png" alt="" />
            <div className="absolute top-1/2 left-20 transform  -translate-y-1/2">
                <h1 style={{ textShadow: '5px 2px 4px rgba(255, 255, 255, 0.5)' }} className="text-9xl font-bold text-pink-600">Welcome</h1>
                <h1 style={{ textShadow: '5px 2px 4px rgba(255, 255, 255, 0.5)' }} className="text-3xl mb-4 font-bold tracking-widest text-[#6d6a6a]">best car toys of <span className="text-[#06959d] italic">baby wheels</span></h1>
                <h1 className="text-pink-600 text-2xl font-semibold stl-font tracking-widest">Awesome Car Toys Collection <br /> Makes Your Baby Happier</h1>
                <button className="border-dotted border-0 btn bg-pink-700 mt-5 tracking-widest">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;