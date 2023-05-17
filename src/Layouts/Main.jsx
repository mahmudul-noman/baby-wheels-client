import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;