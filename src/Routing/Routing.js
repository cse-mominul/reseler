import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Navbar/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Services/Category/Category";

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
            }
        
        ]

    }






])
export default router;