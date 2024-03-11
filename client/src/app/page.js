"use client"
import Test from "./components/Test";
import Logout from "./components/Logout";
import DeleteAccountButton from "./components/DeleteAccountButton";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import { useRouter } from "next/navigation";
import ProfilePageWithEdit from "./pages/ProfilePageWithEdit";
import UserOrders from "./components/UserOrders";
import CreateOrderForm from "./components/CreatOrder";
import ChangePasswordComponent from "./components/ChangePassword";


export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <Test /> */}
        <button onClick={()=>router.push('/pages/Signup')}>go to signup page</button>
        <Logout/>
        <DeleteAccountButton/>
        <Login/>
        <CartPage/>
        <ProfilePageWithEdit/>
        {/* <ChangePasswordComponent/> */}
        
        
        <UserOrders/>

      </div>
    </main>
  );
}
