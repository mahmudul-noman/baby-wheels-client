import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
// import './Shop.css';

const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("microbus")


    useEffect(() => {

        const url = `https://baby-wheels-server.vercel.app/allToysByCategory/${activeTab}`;
        console.log(url);

        fetch(`https://baby-wheels-server.vercel.app/allToysByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div data-aos="fade-down"
        data-aos-duration="2000" className="bg-gray-100 py-20">
            <div className="container mx-auto">
                <h1 className="text-center font-extrabold text-xl lg:text-3xl text-pink-600 mb-6 tracking-wider">Explore All Car Toys By Category</h1>

                <div className="tabs mb-8 justify-center">
                    <a
                        onClick={() => handleTabClick("microbus")}
                        className={`text-sm lg:text-lg font-semibold tab tab-bordered ${activeTab == "microbus" ? "border-b-4 border-pink-600 text-pink-600" : ""
                            }`}>
                        Cars
                    </a>

                    <a
                        onClick={() => handleTabClick("firecar")}
                        className={`text-sm lg:text-lg font-semibold tab tab-bordered ${activeTab == "firecar" ? "border-b-4 border-pink-600 text-pink-600" : ""
                            }`}>
                        Fire Fighter Truck
                    </a>

                    <a
                        onClick={() => handleTabClick("bike")}
                        className={`text-sm lg:text-lg font-semibold tab tab-bordered ${activeTab == "bike" ? "border-b-4 border-pink-600 text-pink-600" : ""
                            }`}>
                        Motor Bike
                    </a>
                </div>


                <div className="grid lg:grid-cols-3 gap-4 px-2 lg:px-0">
                    {
                        toys?.map((toy) => (
                            <ToyCard toy={toy} key={toy._id}></ToyCard>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;