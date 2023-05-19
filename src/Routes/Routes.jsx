import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
// import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Error from "../Pages/Shared/Error/Error";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/Shared/AddToy/AddToy";

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
                element: <AddToy></AddToy>
            }
        ]
    }
])

export default router;