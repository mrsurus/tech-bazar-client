import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Componets/Shared/Navbar/Navbar";
import Spinner from "../Componets/Shared/Spinner/Spinner";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";


const DashbordLayout = () => {
    const { user} = useContext(AuthContext)
    const [isBuyer,isBuyerLoading] =useBuyer(user?.email)
    const [isSeller,isSellerLoading] =useSeller(user?.email)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    console.log(isSeller);

    if(isSellerLoading || isAdminLoading || isBuyerLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-sky-300 ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content bg-slate-300">
                        
                        { isBuyer && <li className="bg-white rounded my-3 hover:bg-gray-300" ><Link to='/dashboard/myorders ' >My Orders</Link ></li>}
                        { isSeller && <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashboard/myproducts'> My Products </Link> </li>}
                        { isSeller &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashboard/addproducts'> Add Products</Link> </li>}
                        { isAdmin &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashboard/allbuyer'> All Buyer</Link> </li>}
                        { isAdmin &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashboard/allseller'> All Seller</Link> </li>}
                         
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;