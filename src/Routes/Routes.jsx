import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);


export default router;