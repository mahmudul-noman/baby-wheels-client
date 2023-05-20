import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
// import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Error from "../Pages/Shared/Error/Error";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/Shared/AddToy/AddToy";
import AllToys from "../Pages/Shared/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/Shared/MyToys/MyToys";
import UpdateToy from "../Pages/Shared/UpdateToy/UpdateToy";
import SingleToy from "../Pages/Shared/SingleToy/SingleToy";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main></Main>,
//         errorElement: <Error></Error>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home></Home>
//             }
//         ]
//     },
//     {
//         path: '/',
//         element: <LoginLayout></LoginLayout>,
//         children: [
//             {
//                 path: '/login',
//                 element: <Login></Login>
//             },
//             {
//                 path: '/register',
//                 element: <Register></Register>
//             }
//         ]
//     }
// ]);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'addToys',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'singleToy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            }

        ]
    }
])

export default router;