import { useEffect } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const user=JSON.parse(localStorage.getItem("user"))||"{}";
    const navigate=useNavigate();
    useEffect(()=>{
       if(user==="{}")
       {
        navigate('/login');
       }
    },[navigate,user]);
    return (
        <div className="overflow-x-hidden overflow-y-auto h-screen">
            <NavBar/>
            <main className="flex gap-3">
                <SideBar/>
              
              <h1 className="text-2xl font-bold my-3">Welcome, {user.name}  to Admin Dashboard !</h1>
              
            </main>
        </div>
    );
}