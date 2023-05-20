import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
// import './Shop.css';

const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("microbus")


    useEffect(() => {

        const url = `http://localhost:5000/allToysByCategory/${activeTab}`;
        console.log(url);

        fetch(`http://localhost:5000/allToysByCategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h1 className="text-center font-extrabold text-3xl text-pink-600 mb-6">Explore All Vehicles By Category</h1>

                <div className="tabs mb-4 justify-center">
                    <a
                        onClick={() => handleTabClick("microbus")}
                        className={`text-lg font-semibold tab tab-bordered ${activeTab == "microbus" ? "tab-active text-pink-600" : ""
                            }`}>
                        Cars
                    </a>

                    <a
                        onClick={() => handleTabClick("firecar")}
                        className={`text-lg font-semibold tab tab-bordered ${activeTab == "firecar" ? "tab-active text-pink-600" : ""
                            }`}>
                        Fire Fighter Truck
                    </a>

                    <a
                        onClick={() => handleTabClick("bike")}
                        className={`text-lg font-semibold tab tab-bordered ${activeTab == "bike" ? "tab-active text-pink-600" : ""
                            }`}>
                        Motor Bike
                    </a>
                </div>


                <div className="grid grid-cols-3 gap-4">
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