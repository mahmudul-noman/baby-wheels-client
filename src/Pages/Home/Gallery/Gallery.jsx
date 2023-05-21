import { FaCar } from "react-icons/fa";

const Gallery = () => {
    return (
        <div className="bg-[#ffeef3]">
            <div className="py-20 container mx-auto">
                <div className="flex gap-2 items-center justify-center mb-12">
                    <p className="text-3xl font-bold text-[#11d6e1]">Gallery</p>
                    <p className="text-5xl font-bold"><FaCar className="text-pink-600"></FaCar></p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text">KidsZone</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="relative shadow p-1 bg-sky-100">
                        <img src="https://i.ibb.co/HTw7HfB/father-son-playing-with-toy-cars.jpg" alt="Image 1" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold px-5 text-xl text-center tracking-widest">Rev up your imagination and embark on thrilling journeys with these incredible car toys!</p>
                        </div>
                    </div>
                    <div className="relative shadow p-1 bg-sky-100">
                        <img src="https://i.ibb.co/rdb9LQ7/child-having-fun-during-playtime-1.jpg" alt="Image 2" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold px-5 text-xl text-center tracking-widest">Step into the driver's seat of fun and let these mesmerizing car toys take you on incredible journeys!</p>
                        </div>
                    </div>
                    <div className="relative shadow p-1 bg-sky-100">
                        <img src="https://i.ibb.co/Jrp9qQx/cute-kid-playing-with-wooden-train-full-shot.jpg" alt="Image 3" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold px-5 text-xl text-center tracking-widest">Transform playtime into a high-speed adventure with these remarkable car toys!</p>
                        </div>
                    </div>
                    <div className="relative shadow p-1 bg-sky-100">
                        <img src="https://i.ibb.co/NrWPJKp/full-shot-mother-kid-playing-with-toys.jpg" alt="Image 4" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold px-5 text-xl text-center tracking-widest">Fuel your imagination and embark on thrilling racing escapades with these captivating car toys!</p>
                        </div>
                    </div>
                    <div className="relative shadow p-1 bg-sky-100">
                        <img src="https://i.ibb.co/kJrHWxG/young-boy-playing-indoors-with-eco-toys.jpg" alt="Image 5" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold px-5 text-xl text-center tracking-widest">Get ready for fun adventures with these cool car toys!</p>
                        </div>
                    </div>
                    <div className="relative shadow p-1 bg-sky-100">
                        <img src="https://i.ibb.co/sHN4sbw/side-view-little-kid-playing-with-car.jpg" alt="Image 6" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold px-5 text-xl text-center tracking-widest">Vroom, vroom! Explore endless fun with these amazing car toys!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;