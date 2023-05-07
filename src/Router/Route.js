import Home from "../Componets/Home/Home/Home";
import Login from "../Componets/Login/Login";
import Products from "../Componets/Products/Products";
import SignUp from "../Componets/SignUp/SignUp";
import Main from "../Layout/Main";
import DashbordLayout from "../Layout/DashbordLayout";
import PrivateRoute from "./PrivateRoute";
import MyOrders from '../Componets/Dashbord/Buyer/MyOrders'
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import MyProducts from "../Componets/Dashbord/Seller/MyProducts";
import Dashbord from "../Componets/Dashbord/Dashbord/Dashbord";
import AddProducts from "../Componets/Dashbord/Seller/AddProducts";
import AdminRoute from "./AdminRoute";
import AllBuyer from "../Componets/Dashbord/Admin/Allbuyer";
import AllSeller from "../Componets/Dashbord/Admin/Allseller";
import Blog from "../Componets/Blog/Blog";
import Payment from "../Componets/Dashbord/Payment/Payment";
import DisplayError from "../Componets/Shared/DisplayError/DisplayError";

const { createBrowserRouter } = require("react-router-dom");

const route = createBrowserRouter(
    [
        {
            path:'/',
            element: <Main></Main>,
            errorElement: <DisplayError></DisplayError>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: 'signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/category/:category',
                    loader: ({params}) => fetch(`https://tech-bazar2-server.vercel.app/products/${params.category}`),
                    element: <PrivateRoute><Products></Products></PrivateRoute>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute> <DashbordLayout></DashbordLayout> </PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashbord></Dashbord>
                },
                {
                    path: '/dashboard/myorders',
                    element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
                },
                {
                    path: '/dashboard/myproducts',
                    element:<SellerRoute><MyProducts></MyProducts> </SellerRoute>
                },
                {
                    path: '/dashboard/addproducts',
                    element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
                },
                {
                    path: '/dashboard/allbuyer',
                    element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
                },
                {
                    path: '/dashboard/allseller',
                    element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                    loader: ({params}) => fetch(`https://tech-bazar2-server.vercel.app/order/${params.id}`)
                    
                }

            ]
        }

    ]
)

export default route;