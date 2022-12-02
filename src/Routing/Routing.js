import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Layout/DashbordLayout/AddProduct";
import AllBayer from "../Layout/DashbordLayout/AllBayer";
import AllSellers from "../Layout/DashbordLayout/AllSellers";
import DashbordLayout from "../Layout/DashbordLayout/DashbordLayout";
import MyOrders from "../Layout/DashbordLayout/MyOrders";
import MyProduct from "../Layout/DashbordLayout/MyProduct";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Navbar/Home";
import Login from "../Pages/Login/Login";
import Premimum from "../Pages/Premimum";
import Category from "../Pages/Services/Category/Category";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([

    {
        path : '/', 
        errorElement: <Error></Error>,
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path : '/category:id',
                element : <Category></Category>
            },
            {
                path : '/categories/1',
                element: <Premimum></Premimum>

            }
        
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRouter><DashbordLayout></DashbordLayout></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },

            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBayer',
                element: <AllBayer></AllBayer>
            }
        ]
    }
])


export default router;