
import { useEffect } from "react";
import Banner from "../Banner/Banner";
import BestSale from "../BestSale/BestSale";
import Brand from "../Brand/Brand";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {

    useEffect(() => {
        document.title = "PHero | Home";
    }, []);

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <BestSale></BestSale>
            <Brand></Brand>
        </div>
    );
};

export default Home;